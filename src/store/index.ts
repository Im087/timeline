import type { State, TLItem } from '@/interfaces';
import { createStore } from 'vuex';

export const getters = {
  getTLItems(state: State) {
    return state.TLItems;
  }
};

export const actions = {
  addTLItem({ commit }, item: TLItem) {
    commit('ADD_TL_ITEM', item);
  },
  deleteTLItem({ commit }, id: string) {
    commit('DELETE_TL_ITEM', id);
  }
};

export const mutations = {
  ADD_TL_ITEM(state: State, item: TLItem) {
    state.TLItems.push(item);
  },
  DELETE_TL_ITEM(state: State, id: string) {
    let index = state.TLItems.findIndex(item => item.id === id);
    state.TLItems.splice(index, 1);
  }
};

export default createStore<State>({
  state: {
    TLItems: []
  },
  getters,
  actions,
  mutations
});