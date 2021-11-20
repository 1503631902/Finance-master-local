
export default function ({ persistor, store, actions }) {
    const state = store.getState();
    const appVersion = state.version.get('appVersion');
    console.log('appVersion', appVersion);
}
