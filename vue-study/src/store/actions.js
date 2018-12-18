/**
 * Created by myuser on 2018/9/27.
 */
const actions={
	stateUpdate:(store,data)=>{
		setTimeout(function(){
			store.commit('stateModify','这是异步更新的')
		},data.time)
	}
}
