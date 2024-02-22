import type { State, TLItem } from '@/interfaces';
import type { Element } from '@vue-flow/core';
import { createStore } from 'vuex';

export const getters = {
  getTLItems(state: State) {
    return state.TLItems;
  }
};

export const actions = {
  updateTLItem({ commit }: any, item: TLItem) {
    commit('UPDATE_TL_ITEM', item);
  },
  addTLItem({ commit }: any, item: TLItem) {
    commit('ADD_TL_ITEM', item);
  },
  deleteTLItem({ commit }: any, id: string) {
    commit('DELETE_TL_ITEM', id);
  },
  updateGraphElement({ commit }: any, item: Element) {
    commit('UPDATE_GRAPH_ELEMENT', item);
  },
  addGraphElement({ commit }: any, item: Element) {
    commit('ADD_GRAPH_ELEMENT', item);
  }
};

export const mutations = {
  UPDATE_TL_ITEM(state: State, item: TLItem) {
    let index = state.TLItems.findIndex(i => i.id === item.id);
    console.log(index);
    state.TLItems.splice(index, 1, item);
  },
  ADD_TL_ITEM(state: State, item: TLItem) {
    state.TLItems.push(item);
  },
  DELETE_TL_ITEM(state: State, id: string) {
    let index = state.TLItems.findIndex(i => i.id === id);
    state.TLItems.splice(index, 1);
  },
  UPDATE_GRAPH_ELEMENT(state: State, item: Element) {
    let index = state.graphElements.findIndex(i => i.id === item.id);
    console.log(index);
    state.graphElements.splice(index, 1, item);
  },
  ADD_GRAPH_ELEMENT(state: State, item: Element) {
    state.graphElements.push(item);
  }
};

export default createStore<State>({
  state: {
    TLItems: [],
    graphElements: []
  },
  getters,
  actions,
  mutations
});