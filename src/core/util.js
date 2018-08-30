import valueData from 'data/values'
import moment from 'moment'

let singleReqList = {}

//基础工具
class Util {
	singleReq (id, req) {
		if (singleReqList[id]) {
			return singleReqList[id]
		}
		let p = req()
		singleReqList[id] = p
		
		p.then(() => {
			delete(singleReqList[id])
		}).catch(() => {
			delete(singleReqList[id])
		})
		return p
	}
	
	//输入框数据改变  需要bind(this,[name,ctx])
	//参数可以是字符串 name 或者数组 [name,ctx]
	//ctx 是要修改的对象
	valueChange (info, e) {
		if (info instanceof Array) {
			if (info.length > 1) {
				info[1][info[0]] = e.target.value
			} else {
				this.state[info[0]] = e.target.value
			}
		} else {
			this.state[info] = e.target.value
		}
		this.setState(this.state)
	}
	
	//数据改变  需要bind(this,[name,ctx])
	//参数可以是字符串 name 或者数组 [name,ctx]
	//ctx 是要修改的对象
	dataChange (info, val) {
		if (info instanceof Array) {
			if (info.length > 1) {
				info[1][info[0]] = val
			} else {
				this.state[info[0]] = val
			}
		} else {
			this.state[info] = val
		}
		this.setState(this.state)
	}
	
	//时间改变  需要bind(this,[name,ctx])
	//参数可以是字符串 name 或者数组 [name,ctx]
	//ctx 是要修改的对象
	timeChange (info, date) {
		let _date = date ? date.getTime() : undefined
		if (info instanceof Array) {
			if (info.length > 1) {
				info[1][info[0]] = _date
			} else {
				this.state[info[0]] = _date
			}
		} else {
			this.state[info] = _date
		}
		this.setState(this.state)
	}
	
	toggleBool (info) {
		if (info instanceof Array) {
			if (info.length > 1) {
				info[1][info[0]] = !info[1][info[0]]
			} else {
				this.state[info[0]] = !this.state[info[0]]
			}
		} else {
			this.state[info] = !this.state[info]
		}
		this.setState(this.state)
	}
	
	error (title, msg) {
		console.error(title, msg)
	}
	
	success (title, msg) {
		console.log(title, msg)
	}
	
	imgSize (url, size) {
		if (!url) {
			return ''
		}
		let ext = '.png'
		try {
			ext = /.+(\.\w+)$/.exec(url)[1]
		} catch (e) {
			//return '';
		}
		return url + '_' + size + ext
	}
	
	getAvatar (url, size, sex) {
		if (!url && !(sex === 1 || sex === 2)) {
			return ''
		}
		if (!url) {
			if (sex === 1) {
				url = valueData.boy_avatar
			} else {
				url = valueData.girl_avatar
			}
		}
		return this.imgSize(url, size)
	}
	
	newArray (start, end) {
		const result = []
		for (let i = start; i < end; i++) {
			result.push(i)
		}
		return result
	}
	
	//数字填充,返回字符串，如将9填充为09
	pad (num, n) {
		let l = ('' + num).length
		return Array(n > l ? (n - l + 1) : 0).join(0) + num
	}
	
	//moment占个位，以后统一解决东八区问题
	moment (date) {
		return moment(date)
	}
	
	extend = Object.assign
	
	isUrl (text) {
		if (!/(?:https|http|ftp|rtsp|mms)/.test(text)) {
			return false
		}
		return true
	}
	
	optionCode (code) {
		return decodeURIComponent(encodeURIComponent(code).replace(/%09/g, '%20%20%20%20'))
	}
}

let util = new Util
export default util
