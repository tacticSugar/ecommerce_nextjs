import Signin from 'components/pages/SignIn/SignIn'
import { getSession, getCsrfToken, getProviders } from 'next-auth/react'

export default function SigninPage() {
  return (
    <Signin
      providers={providers}
      callbackUrl={callbackUrl}
      csrfToken={csrfToken}
    />
  )
}

export async function getServerSideProps(context) {
  const { req, query } = context

  const session = await getSession({ req })
  const { callbackUrl } = query

  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
      },
    }
  }
  const csrfToken = await getCsrfToken(context)
  const providers = Object.values(await getProviders())
  return {
    props: {
      providers,
      csrfToken,
      callbackUrl,
    },
  }
}
