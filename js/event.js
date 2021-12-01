var title = getCookie('title')?getCookie('title'):'大学'
var title_button =getCookie('title_button')?getCookie('title_button'):'入学'

		
var grilname = ['杞碧灵','后文漪','赵柔', '陆梦','慕容嫣','林紫璇']

var eventlist =[
]

/**
 * evn 事件名称
 * buttons 按钮选择
 * 		- txt 按钮显示
 * 		- over 按钮点击事件
 * 		- number 奖惩
 * 		- event 后续事件 （格式与初始一样）
 * isnewday 是否为新天 不写默认开启新的一天
 * 
 * 其中grilname为人物名字，随机选择，批量替换。
 * \r 为换行标志
 */

var event1 = {
	'evn':"你发现grilname在马路对面向你招手,你选择",
	'buttons':{
		"yes":{
			"txt":"走上前",
			"over":"你以为你桃花运来了，连忙走了上去，她张开了她如同樱桃般的单薄嘴唇对你说道：办卡么？\r 金钱：-2 \r智力：-1 \r grilname好感：+2",
			"number":{
				"money":-2,
				"brains":-1,
				"feel":2
			}
		},
		"no":{
			"txt":"装作没看见",
			"over":"这么漂亮的妹子肯定不是在向我招手，还是早点回寝室吧 \r grilname好感：-1",
			"number":{
				"feel":-1
			}	
		}
	}

}

var event2 ={
	'evn':"中午了 你去了食堂吃饭，发现只有两条队伍，一条速度快但是人很多，一条速度慢但是人很少，你选择",
	'buttons':{
		"yes":{
			"txt":"长的那条",
			"over":"你背后排了grilname,你书包顶到她,她说她把你挂在学校论坛里 说你非礼她，你很难受没吃午饭 \r智力：-3 \r grilname好感：-4",
			"number":{
				"brains":-3,
				"feel":-4
			}
		},
		"no":{
			"txt":"短的那条",
			"over":"前面的grilname调侃你说你偷拍要把你交给辅导员，让学校考虑要不要开除你，你很乖的道歉了，但是没吃午饭 \r grilname好感：+2",
			"number":{
				"feel":2
			}	
		},
	}
}

var event3 = {
	'evn':"上惯了高中晚自习的你突然发现，大学里居然没有晚自习，难以按耐躁动的心的你选择去",
	'buttons':{
		'no1':{
			'txt':"图书馆",
			"over":"你发现了grilname在图书室读书，你厚脸皮的坐在了她的对面，拿着高等数学外皮的搞笑漫画看了起来，却没压制住自己的笑声 \r grilname好感：-1",
			'number':{
				'feel':-1
			}
		},
		'no2':{
			'txt':'教室',
			'over':"你发现grilname在教室写试卷，由于教室里很多人，你只能安静的坐在她旁边学习，并决定回去好好看看日本老师的电影 \r grilname好感：+1 \r智力：+1 \r 体质：-2",
			'number':{
				'feel':1,
				'brains':1,
				'body':-2
			}
		},
		'no3':{
			'txt':'广场',
			"over":"来到广场的你发现，长凳上都是甜蜜的情侣在不顾他人的疯狂kiss，你感到身体有些不适，决定还是回寝室看看日本老师的电影 \r 体质：-2",
			"number":{
				'body':-2
			},
		},
		'no4':{
			'txt':'哪也不去',
			'over':"寝室的室友开始了lol开黑，你身为塑料选手欣然加入 \r 体质：-1 \r 智力：-1",
			'number':{
				'body':-1,
				'brains':-1,
			}
		}
	}
	
}

var event4={
	'evn':'今天你校园里发现了grilname在大学广场招学生会成员，她也给你发了传单，你选择',
	'buttons':{
		'no1':{
			'txt':'加入学生会',
			'over':'你在学生会的群里艾特grilname，她十分生气的告诉你要叫她学生会副会长，并且在群里批评了你 \r 智力：+2 \r grilname好感：-1',
			'number':{
				'brains':2,
				'feel':-1
			}
		},
		'no2':{
			'txt':'不加入学生会',
			'over':'平凡的你怎么可能会加入这种大学的神秘组织，你拒绝了grilname，并告诉她暂时没有加入社团的打算 \r grilname好感：-3',
			'number':{
				'feel':-3
			}
		}
	}
}

var event5={
	'evn':'你参加了辩论赛大赛，开赛前遇到了这次的对手grilname，她请求你能够说傻一点，你选择',
	'buttons':{
		'no1':{
			'txt':'交给我了',
			'over':'你的装傻套路在辩论会上大放异彩，一句“哦，这样么？”气的grilname哑口无言 \rgrilname好感：-3 \r智力：+5',
			'number':{
				'brains':5,
				'feel':-3
			}
		},
		'no2':{
			'txt':'义正言辞的拒绝',
			'over':'grilname犀利的台词让你哑口无言，你奇迹般的输掉了比赛。\rgrilname好感:+2 \r智力：-5',
			'number':{
				'brains':-5,
				'feel':2
			},
			"event":{
				'evn':'grilname以为你是傲娇让她赢了比赛，赛后很开心的找你吃饭，你此时回答她',
				'isnewday':false,
				'buttons':{
					'no1':{
						'txt':'傻逼女人，滚',
						'over':'grilname很生气的走了，你决定回寝室好好学习辩论资料。\rgrilname好感：-3 \r智力：+5',
						'number':{
							'brains':5,
							'feel':-3
						},
					},
					'no2':{
						'txt':'好呀',
						'over':'你们很愉快的约定了下周见面的时间 \rgrilname好感：+1，\r智力：-1',
						'number':{
							'brains':-1,
							'feel':1
						},
						'event':{
							'isnewday':true,
							'evn':'grilname今天似乎是好好打扮过了的样子，不过你觉得她穿的有点像你去酒吧时候看到的坐台小妹，这个时候你会说',
							'buttons':{
								'no1':{
									'txt':'你今天穿的真好看，就像坐台妹一样',
									'over':'grilname狠狠的甩了你一巴掌，你觉得你很委屈 \rgrilname好感：-4 \r智力：-1',
									'number':{
										'brains':-1,
										'feel':-4
									}
								},
								'no2':{
									'txt':'300一晚？',
									'over':'grilname表现出了很惊讶的样子，然后气愤的走掉了，不久之后你在手机上收到了grilname的消息，问你，现在的价格都是300一晚上么？\r智力：+4',
									'number':{
										'brains':4
									},
									'event':{
										'isnewday':true,
										'evn':'grilname今天突然和说300一晚太便宜，她要涨到900，你说',
										'buttons':{
											'no1':{
												'txt':'哦，关我毛事',
												'over':'洁身自好的你选择拉黑了grilname \rgrilname好感：-5 \r财力：+2',
												'number':{
													'money':2,
													'feel':-5
												}
											},
											'no2':{
												'txt':'当然算',
												'over':'你愉悦的和grilname发生了金钱交易，隔天学校通知本校有15个学生已确诊艾滋，你慌忙检查，发现你中招了 \rgrilname好感:+5 \r财力：-3 \r体质：-50',
												'number':{
													'mondy':-3,
													'body':-50,
													'feel':5
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			
		}
	}
}

var event6 = {
	'evn':''
}

function unstart(){
	eventlist = [];
	eventlist.push(event1);
	eventlist.push(event2);
	eventlist.push(event3);
	eventlist.push(event4);
	eventlist.push(event5);
	return eventlist;
}

Array.prototype.remove = function(val) {  
    var index = this.indexOf(val);  
    if (index > -1) {  
        this.splice(index, 1);  
    }  
};

function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue); //编码
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//读Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);  //解码
    }
    return "";
}