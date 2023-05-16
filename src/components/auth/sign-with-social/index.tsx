import { TAuthProvider, authProviders } from '@/constants/firebase';
import { randomString } from '@/functions/string';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

type TSignInWithSocial = {
  signInWithSocial: Function;
};

function SignInWithSocial(props: TSignInWithSocial) {
  return (
    <div className="sign-in-with-social">
      {authProviders.map((authProvider: TAuthProvider) => (
        <li key={randomString()}>
          <Button
            variant="light"
            onClick={() =>
              props.signInWithSocial({ provider: authProvider.provider })
            }
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${authProvider.icon}`}
              alt={authProvider.name}
              width="30"
              height="30"
            />
          </Button>
        </li>
      ))}
    </div>
  );
}

SignInWithSocial.defaultProps = {
  signInWithSocial: () => false,
};

export default SignInWithSocial;
