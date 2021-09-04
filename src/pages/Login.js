import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
	Avatar,
	Container,
	Card,
	Box,
	Flex,
	Badge,
	Switch,
	Divider,
	Image,
	Text,
	Button,
	Input,
	Paragraph,
	Field,
	Slider,
	Select,
	Heading,
	Link as ThemeUILink,
	Spinner,
	useColorMode,
} from 'theme-ui';
import { Link } from 'react-router-dom';

const Login = () => {
	const [colorMode, setColorMode] = useColorMode();
	const [loading, setLoading] = useState(false);

	const toggleColorMode = () => {
		setColorMode(colorMode === 'light' ? 'dark' : 'light');
	};

	const clickLoading = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 5000);
	};
	return (
		<Container p={4}>
			<Box p={2}>
				<Avatar
					size={100}
					src='https://v4-3-3.material-ui.com/static/images/avatar/1.jpg'
				/>
				<Badge ml={-2}>1</Badge>
			</Box>
			<Flex sx={{ alignItems: 'center' }}>
				<Heading>Login</Heading>
				<Badge ml={2}>new</Badge>
			</Flex>
			<Divider />
			<Box p={2}>
				<Card sx={{ maxWidth: 250 }}>
					<Image
						sx={{
							borderRadius: '4px 4px 0 0',
						}}
						src='https://miro.medium.com/max/600/1*7fOjnGrHXIwWXvaFzz7AFA.jpeg'
					/>
					<Box p={2}>
						<Text as='h3' variant='subtitle'>
							Hello Word!
						</Text>
						<Text variant='note'>Hello Word from text note!</Text>
					</Box>
				</Card>
			</Box>
			<Box p={2}>
				<Select
					arrow={
						<Flex
							sx={{
								ml: -30,
								alignItems: 'center',
							}}>
							<FiChevronDown size={22} />
						</Flex>
					}>
					<option value='test1'>Test 1</option>
					<option value='test2'>Test 2</option>
					<option value='test3'>Test 3</option>
					<option value='test4'>Test 4</option>
				</Select>
			</Box>
			<Box p={2}>
				<Switch onChange={toggleColorMode} label='Active the dark mode!' />
			</Box>
			<Box p={2}>
				<Switch label='Testing gray' />
			</Box>
			<Box p={2}>
				<Button disabled={loading} mr={2} onClick={clickLoading}>
					<Flex sx={{ alignItems: 'center' }}>
						<Box sx={{ flex: 'auto 1' }}>
							{loading ? (
								<Spinner size={16} strokeWidth={2} color='white' mr={2} />
							) : null}
							<span>Primary</span>
						</Box>
					</Flex>
				</Button>
				<Button mr={2} disabled={loading} variant='secondary'>
					Secondary
				</Button>
				<Button mr={2} disabled={loading} variant='danger'>
					Danger
				</Button>
			</Box>
			<Box p={2} sx={{ display: 'flex', alignItems: 'center' }}>
				<Text>Components</Text>
				<Badge ml={1}>New</Badge>
			</Box>

			<Box>
				<Text variant='caps'>Hello</Text>
			</Box>

			<Box p={2}>
				<Input disabled placeholder='Your email' />
			</Box>
			<Box p={2}>
				<Field label='Email' />
			</Box>
			<Box p={2}>
				<Paragraph>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
					section 1.10.32.
				</Paragraph>
			</Box>
			<Box p={2}>
				<Slider />
			</Box>
			<Box p={2}>
				<ThemeUILink as={Link} to='/auth/dashboard'>
					Dashboard
				</ThemeUILink>
			</Box>
		</Container>
	);
};

export default Login;
