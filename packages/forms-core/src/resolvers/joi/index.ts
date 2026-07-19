import { toValues } from '../../utils';
import type { ResolverOptions, ResolverResult } from '../../types';

export const joiResolver =
    <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validate' : 'validateAsync'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e: any) {
            if (e?.details) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: e.details.reduce((acc: Record<string, any[]>, error: any) => {
                        const pathKey = error.path?.length ? error.path.join('.') : name;

                        if (pathKey) {
                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            throw e;
        }
    };
