export const resolve = {
    fallback: { "assert": require.resolve("assert/") },
    fallback: { "url": require.resolve("url/") },
    fallback: { "process": require.resolve("process/") }
};