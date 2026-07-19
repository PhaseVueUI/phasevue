export interface ResolverOptions {
    sync?: boolean;
    raw?: boolean;
}

export interface ResolverResult<T = any> {
    values: T;
    errors: Record<string, any>;
}
