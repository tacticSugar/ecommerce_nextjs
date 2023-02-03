import Reset from 'components/pages/auth/Reset'
import { getSession } from 'next-auth/react'
import jwt from 'jsonwebtoken'

export default function ResetPage({ user_id }) {
  return <Reset user_id={user_id} />
}

export async function getServerSideProps(context) {
  const { query, req } = context
  const session = await getSession({ req })
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  const token = query.token
  const user_id = jwt.verify(
    token,
    process.env.RESET_TOKEN_SECRET,
    function (err, decoded) {
      console.log('decoded.foo')
    }
  )
  if (user_id == null || undefined) {
    console.log('noid')
  }
  console.log(user_id)

  return {
    props: {
      user_id: user_id.id,
    },
  }
}
