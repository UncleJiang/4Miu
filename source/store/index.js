import {observable, action, computed} from 'mobx';

class indexStore {
  @observable searchText;
  @observable songName;
  @observable singerName;

  @computed
  get getSearchApi () {
    return 'http://msearchcdn.kugou.com/api/v3/search/song?showtype=14&highlight=em&pagesize=30&tag_aggr=1&tagtype=全部&plat=0&sver=5&keyword='+ this.searchText +'&correct=1&api_ver=1&version=9108&page=1&area_code=1&tag=1&with_res_tag=1';
  }

  @action
  changeSearchText(text) {
    this.searchText = text;
  }

  @action
  changeSongName(songN) {
    this.songName = songN;
  }

  @action
  changeSingerName(singerN) {
    this.singerName = singerN;
  }

  constructor() {
    this.searchText = 'world';
  }
}

const stores = new indexStore();
export default stores;