import React, { useState } from 'react';
import '../assets/styles/EmailAuthenticationForm.scss'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { useAuth } from '../contexts/Auth';
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

interface FormValues {
  email: string;
  password: string;
  terms: boolean;
  name?: string;
}

export const EmailAuthenticationForm = (props: PaperProps) => {
  const [type, toggle] = useToggle(['login', 'register']);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  const { signIn, signUp } = useAuth();



  const handleSignIn = async () => {
    if(type==='register')
      signUp({ email, password });
    else
      signIn({ email, password })
  };

  // const handleSignUp = async () => {
  //   signUp({ email, password });
  // };

  return (
    <div className='auth'>
      <div className='auth-form'>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to KUI, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          {/* <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

  
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              radius="md"
            />


          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl" onClick={handleSignIn} >
              {upperFirst(type)}
            </Button>
          </Group>
      </Paper>
      </div>
    </div>
  );
}
