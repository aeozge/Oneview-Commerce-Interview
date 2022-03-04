import { render, screen} from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/store/store/store';
import Search from '../src/features/search';
import usersReducer from '../src/store/reducers/usersReducer';

describe('test header is shown', () => {
test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByText(/Oneview Commerce/i);
  expect(element).toBeInTheDocument();
})});

describe('test search text area', () => {
  test("renders a page with search bar", () => {
    render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const search = screen.getByRole("textbox");
  expect(search).toBeInTheDocument();
})});

describe('test placeholder text', () => {
  test('search renders without errors', () => {
    const wrapper = render(
    <Provider store={store}>
			<App>
				<Search />
			</App>
		</Provider>
	);
  expect(wrapper.getByPlaceholderText('Search User Name')).toBeInTheDocument();
 })});

 describe('test users reducer', () => {
  const initialState = {
    userData: [],
    searchUser: [],
    postsAction: { posts: [], user: "" },
    };
    
    test('Returns the initial state when an action type is not passed', () => {
      const reducer = usersReducer(undefined, {});
      expect(reducer).toEqual(initialState);
  })});

 