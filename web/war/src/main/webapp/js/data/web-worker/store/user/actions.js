define(['../actions'], function(actions) {
    actions.protectFromWorker();

    return actions.createActions({
        workerImpl: 'data/web-worker/store/user/actions-impl',
        actions: {
            putUser: (user) => ({ user }),
            putUserPreferences: (preferences) => ({ preferences }),
            setPreference: (name, value) => ({ name, value })
        }
    })
})
