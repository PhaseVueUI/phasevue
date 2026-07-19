import type { Struct } from 'superstruct';
import { toValues } from '../../utils';
import type { ResolverOptions, ResolverResult } from '../../types';

export const superStructResolver =
    <T>(schema: Struct<T>, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { raw = false } = resolverOptions || {};
        const [errors, data] = schema.validate(values, schemaOptions);

        if (errors) {
            return {
                values: toValues(undefined, name),
                errors: errors.failures().reduce((acc: Record<string, any[]>, error: any) => {
                    const pathKey = error.path?.length ? error.path.join('.') : name;

                    if (pathKey) {
                        acc[pathKey] ||= [];
                        acc[pathKey].push(error);
                    }

                    return acc;
                }, {})
            };
        }

        return {
            values: toValues(raw ? values : data, name),
            errors: {}
        };
    };
