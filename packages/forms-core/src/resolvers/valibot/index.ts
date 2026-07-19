import { getDotPath, safeParse, safeParseAsync } from 'valibot';
import { toValues } from '../../utils';
import type { ResolverOptions, ResolverResult } from '../../types';

export const valibotResolver =
    <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};
        const result = sync ? safeParse(schema, values, { abortPipeEarly: false, ...schemaOptions }) : await safeParseAsync(schema, values, { abortPipeEarly: false, ...schemaOptions });

        if (result.success) {
            return {
                values: toValues(raw ? values : result.output, name),
                errors: {}
            };
        }

        return {
            values: toValues(raw ? values : undefined, name),
            errors: result.issues?.reduce((acc: Record<string, any[]>, error: any) => {
                const pathKey = getDotPath(error) || name;

                if (pathKey) {
                    acc[pathKey] ||= [];
                    acc[pathKey].push(error);
                }

                return acc;
            }, {})
        };
    };
