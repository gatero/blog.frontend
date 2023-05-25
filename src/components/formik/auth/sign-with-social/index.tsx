import { TAuthProvider, authProviders } from '@/constants/firebase';
import { TSignInWithSocialFormData } from '@/firebase/firebase.auth';
import { randomString } from '@/functions/string';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

type TSignInWithSocialProps = {
  signInWithSocial: (formData: TSignInWithSocialFormData) => void;
};

const defaultValues = {
  signInWithSocial: () => false,
};

function SignInWithSocial(props: TSignInWithSocialProps = defaultValues) {
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

export default SignInWithSocial;
