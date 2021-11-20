
import Immutable from 'immutable';

export const version = {
    default: Immutable.fromJS({}),
    persist: true,
    actions: {
        SET_VERSION: {
            reducer: (state, { payload }) => state.merge(payload),
        },
    },
};

export const profile = {
    default: Immutable.fromJS({
        userId: '',
        username: '',
        avatar: '',
        signup: false,
    }),
    actions: {
        UPDATE_PROFILE: {
            inputs: ['userId', 'username', 'avatar', 'signup'],
            reducer: (state, { payload }) => {
                if (payload.username) {
                }
                return state.merge(payload);
            },
        },
    },
};

export const uiState = {
    default: Immutable.fromJS({}),
    actions: {},
};
