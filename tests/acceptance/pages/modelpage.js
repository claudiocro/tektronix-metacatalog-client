export default {
  visitNew(modelhitid) {
    return visit('/modelhit/'+modelhitid+'/page/new');
  },
  catalogsSelectLength() {
    return find('select option').length;
  }
};
