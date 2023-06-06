import routes from './routes';

const useRouterProvider = () => {
  const routerProvider = () => routes()
  return {
    routerProvider: routerProvider
  };
};
export default useRouterProvider;
