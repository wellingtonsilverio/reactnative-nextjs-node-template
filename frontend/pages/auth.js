import { signIn, signOut, useSession } from 'next-auth/client'

export default function Auth({children}) {
  const [ session, loading ] = useSession()

	if (!loading) {
    return (
			<>
				Loading
			</>
		)
  }

	if (!session) {
    return (
			<>
				Not signed in <br />
				<button onClick={signIn}>Sign in</button>
			</>
		)
  }

  return (
    <>
      <div>
        <div>
          <a>Node Template</a>
          <button onClick={signOut}>Sign out</button>
        </div>
        <div>{children}</div>
        <div>Copyright</div>
      </div>
    </>
  )
}
