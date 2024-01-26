import type { State, TLItem } from '@/interfaces';
import { createStore } from 'vuex';

export const actions = {
  addTLItem({ commit }, item: TLItem) {
    commit('ADD_TL_ITEM', item);
  },
};

export const mutations = {
  ADD_TL_ITEM(state: State, item: TLItem) {
    console.log('ADD_TL_ITEM', item);
    state.TLItems.push(item);
  }
};

export default createStore<State>({
  state: {
    TLItems: []
  },
  actions,
  mutations
});