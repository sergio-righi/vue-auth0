
export default async ({ error, query, redirect, $service }: any) => {
  const hasCallback = query.callback
  const isAuthenticated = await $service.auth.isAuthenticated()
  if (!isAuthenticated && hasCallback) {
    return redirect(hasCallback)
  } else if (!isAuthenticated) {
    error({ statusCode: 400 })
  }
}