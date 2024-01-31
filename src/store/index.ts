import type { State, TLItem } from '@/interfaces';
import { createStore } from 'vuex';

export const getters = {
  getTLItems(state: State) {
    return state.TLItems;
  }
};

export const actions = {
  saveTLItem({ commit }, item: TLItem) {
    commit('SAVE_TL_ITEM', item);
  },
  deleteTLItem({ commit }, id: string) {
    commit('DELETE_TL_ITEM', id);
  }
};

export const mutations = {
  SAVE_TL_ITEM(state: State, item: TLItem) {
    let index = state.TLItems.findIndex(i => i.id === item.id);
    index === -1 ? state.TLItems.push(item) : state.TLItems.splice(index, 1, item);
  },
  DELETE_TL_ITEM(state: State, id: string) {
    let index = state.TLItems.findIndex(i => i.id === id);
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