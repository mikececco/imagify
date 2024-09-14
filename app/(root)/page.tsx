import { SignedIn, SignedOut } from '@clerk/nextjs'

function Home() {
  return (
    <div className='flex justify-between'>
      <p>
        Home
      </p>
      <SignedIn>
        {/* Mount the UserButton component */}
        {/* <UserButton /> */}
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        {/* <SignInButton /> */}
      </SignedOut>
    </div>
  )
}

export default Home
