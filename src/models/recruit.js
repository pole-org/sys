import {createModel} from '../utils/rs/Model';
import {getConfig} from '../services/assess-config';

export default createModel({
  namespace: 'recruit',
  initialState: {
    data: {
      list: [],
      total: 0,
    },
  },
  effects: {
    * get({payload}, {call, put}) {
      const res = yield call(getConfig, payload);
      if (res.data) {
        const {config} = res.data.toObject();
        yield put({
          type: 'setStateOk',
          payload: {
            config,
          },
        });
      }
    },
  },
});



