
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
  path: '/',
  name: 'login',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      import('containers/Login'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([component]) => {
      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  
},{
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/client',
      name: 'client',
      getComponent(nextState, cb) {
        import('containers/Client')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/tasks1',
      name: 'tasks1',
      getComponent(nextState, cb) {
        import('containers/Tasks')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/tasks2',
      name: 'tasks2',
      getComponent(nextState, cb) {
        import('containers/Task2')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/tasks3',
      name: 'tasks3',
      getComponent(nextState, cb) {
        import('containers/Task3')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/report',
      name: 'reports',
      getComponent(nextState, cb) {
        import('containers/Reports')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/leave',
      name: 'leaves',
      getComponent(nextState, cb) {
        import('containers/Leaves')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/app',
      name: 'app',
      getComponent(nextState, cb) {
        import('containers/Main')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/dash2',
      name: 'dash2',
      getComponent(nextState, cb) {
        import('containers/Dashboard2')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/dash3',
      name: 'dash3',
      getComponent(nextState, cb) {
        import('containers/Dashboard3')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/archived',
      name: 'archived',
      getComponent(nextState, cb) {
        import('containers/Archived')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    {
      path: '/tasksummary',
      name: 'tasksummary',
      getComponent(nextState, cb) {
        import('containers/Tasksummary')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 

    {
      path: '/leaves2',
      name: 'leaves2',
      getComponent(nextState, cb) {
        import('containers/Leaves2')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, 
    
    
  ];
}
