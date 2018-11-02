import { message } from 'antd';
import { insertLibrary, deleteLibrary, findByParentCode, modifyLibrary } from '@/services/api-library';
import React from 'react';
import { queryMy } from '@/services/library';

export default {
  namespace: 'library',

  state: {
    treeData: [
      {
        href: '#',
        title: ` 江湖儿女 (2018) `,
        avatar: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533283770.jpg',
        description: '又名: 金钱与爱情 / 灰烬是最洁白的 / Ash is Purest White / Money & Love / Les Eternels',
        content: '故事开始于2001年的山西大同，巧巧（赵涛 饰）和斌斌（廖凡 饰）相恋多年，巧巧一心希望能够和斌斌成家过安稳的生活，但斌斌身为当地的大佬，有着自己更高远的志向。一场意外中，斌斌遭人暗算危在旦夕，巧巧拿着斌斌私藏的手枪挺身而出救了斌斌，自己却因为非法持枪而被判处了五年的监禁。一晃眼五年过去，出狱后的巧巧发现整个世界都发生了翻天覆地的变化，唯一不变的是她对斌斌真挚的感情。巧巧跋山涉水寻找斌斌的下落，但此时的斌斌早已经失去了往日的锋芒，而且身边已有了新的女友。身无分文的巧巧靠着自己的智慧摸爬滚打，终于为自己挣得了一片天地。',
        type: ['爱情','犯罪'],
        message: [
          {
            username: '匿名用户',
            message: '放肆 说科长开小灶的去看看姜文、陈凯歌、冯小刚、顾长卫、管虎！！！哪个没用过自己老婆？！！！这才是爱人的最高境界！！！',
            time: '2018-05-11',
          },
          {
            username: '桃桃淘电影',
            message: '7。我的观感比《山河故人》要好，无论是形式或情节都相对完整，更类型和情节剧，符号与暗示相对略少。尤其第一部分，本土黑帮的设定还是很不错的，廖凡的表现还是很棒。不过，其实这是个大女主的电影，赵涛才是核心，关于她的成长。比较厉害的是，这部片子试图串起贾樟柯之前的几部电影，野心大了。',
            time: '2018-05-12 ',
          },
        ]
      },
      {
        href: '#',
        title: ` 一出好戏 (2018) `,
        avatar: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg',
        description: '又名: 大富翁 / 诳想曲 / The Island',
        content: '马进欠下债务，与远房表弟小兴在底层社会摸爬滚打，习惯性的买彩票，企图一夜暴富，并迎娶自己的同事姗姗。一日，公司全体员工出海团建，途中，马进收到了彩票中头奖的信息，六千万！就在马进狂喜自己翻身的日子终于到来之际，一场突如其来的滔天巨浪打破了一切。苏醒过来的众人发现身处荒岛 ，丧失了一切与外界的联系…… ',
        type: ['剧情','喜剧'],
        message: [
          {
            username: '掉线',
            message: '没想到黄渤居然拍了一出魔幻现实主义，故事相当好，但黄渤并没有被故事支配，十分自如的展现了自己的影像想法，作为处女作非常成熟。虽然片子也有些这样那样的遗憾，但该有的荒诞，该有的黑暗都成功地表达了出来，即便不带“演员跨界执导”的滤镜，这也是一年中排的上号的国产佳片。',
            time: '2018-08-08 ',
          },
          {
            username: '二十二岛主',
            message: '实名表扬张艺兴，在一众资深演员中竟然能够成为戏眼，这要感谢黄渤的剧本和信任，给了他一个有发挥的角色。说回电影本身，整个观影过程就像心电图一样起起伏伏，每当觉得挺好的地方，接下来很快就垮掉，可当不足的地方过去了，又会有新的亮点出现。毕竟是处女作，不能因为导演是黄渤就拿超级高的标准来要求他，第一部戏就敢挑战具有如此丰富元素的大群戏，这种勇气只怕姜文都不具备。姜文第5部才拍出了一步之遥，而黄渤第一部就拍出来了，结尾从悬崖上坠落的那场戏和马走日跳下来的那一幕太像，并留给了观众足够多的解读空间。所以已经可以预见到影片正式上映后可怕的两极分化，但我可以肯定的说，这是2018华语电影最具勇气的尝试之一。最后想说，下一部戏也别什么广告都植入，在末世寓言面前，开心消消乐和快手真的太low了。',
            time: '2018-08-05',
          },
        ]
      },
      {
        href: '#',
        title: ` 苦行僧的非凡旅程 The Extraordinary Journey of The Fakir (2018) `,
        avatar: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516475337.jpg',
        description: '又名: 衣柜里的冒险王 / 困在宜家衣柜里的苦行僧 / 跟着IK/EA衣橱去旅行(台)',
        content: '电影《衣柜里的冒险王》改编自法国畅销小说《困在宜家衣柜里的苦行僧》，讲述一段幽默又感动的故事。在印度靠骗取游客钱财为生的 Aja，一直想要攒钱带母亲去巴黎，但是母亲没能等到这一天便去世了。Aja 带着母亲的骨灰，只身一人来到巴黎打算寻找从未谋面的父亲。Aja 在巴黎来到心驰神往的宜家家居，对在宜家购物的女孩 Marie 一见钟情，并且大胆搭讪 Marie，二人相约第二天在埃菲尔铁塔见面。但当晚，Aja 为了省去住宿费用夜里藏在宜家，阴差阳错地躲在衣柜里结果被运到英国，而后被当做偷渡客遣送到了西班牙，又偷偷钻进了明星的箱子里到了意大利，搭乘热气球逃到了开往利比亚的船上，兜兜转转最后才又回到巴黎，与 Marie 重逢。 ',
        type: ['剧情','喜剧'],
        message: [
          {
            username: '匿名用户',
            message: '一部天马行空，想当然的电影，感觉像做了一场梦，莫名其妙的去了一些国家，遇到一群人，并发生了一些奇怪的故事，全片95分钟，有80分钟显得过于无聊和缺乏吸引点，反而最后的几分钟，在散尽巨额资金支持梦想穷人的桥段有感动到我。',
            time: '2018-08-05',
          },
        ]
      },
      {
        href: '#',
        title: ` 三张面孔 سه چهره (2018) `,
        avatar: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537594004.jpg',
        description: '又名: 伊朗三面戏剧人生(港) / Se Rokh / Three Faces',
        content: '一位著名的伊朗女演员收到了一段令人不安的视频。影像中，一个年轻女孩请求她的帮助，以逃离保守家庭的支配……女演员向好友兼导演Jafar Panah求助，以确定这是否是一次恶作剧。两人一同动身前往西北部与世隔绝的山区，去寻找年轻女孩所在的村庄。在这里，古老的传统依然主宰着当地人的每日生活。 ',
        type: ['剧情'],
        message: [
          {
            username: '陈凭轩',
            message: '你敢不敢拍一部没有爱情故事的电影？有几个长镜头，有几个剪碎的正反打，用自然光？有男有女有牛有土有包皮？你们以传统的标准来失望来诋毁，就像在路的尽头按喇叭，而我的电影是拓宽山路的铁锹。',
            time: '2018-08-05',
          },
        ]
      },
    ],
    myData: [],
  },

  effects: {
    *queryMy({ payload }, { call, put }) {
      const respons = yield call(queryMy);
      console.log(respons.results,'1122334')
      console.log(JSON.parse(respons.results))
      // yield put ({
      //   type: 'add',
      //   payload,
      // })
    },
    *deleteLibrary({ payload }, { put }) {
      yield put({
        type: 'delete',
        payload,
      });
    },
    *addMessage({ payload },{ put }) {
      console.log(payload,'123')
      put({
        type: 'addMessage',
        payload,
      })
    },
  },

  reducers: {
    add (state, { payload }) {
      state.treeData.push(payload)
      return {
        ...state
      }
    },
    delete (state, { payload }) {
      const index = state.treeData.indexOf(payload);
      if (index>=0){
        state.treeData.splice(index);
      }
      return{
        ...state,
      }
    },
    addMessage (state, { payload }) {
      console.log(payload,456)
      console.log(payload.name.replace(/\s+/g,""));
      const name = payload.name.replace(/\s+/g,"");
      let number;
      state.treeData.forEach((item,index) => {
        if(item.title.replace(/\s+/g,"")===name){
          console.log(index,'jiushi')
          number = index;
        }
      })
      if(number>=0) {
        state.treeData[number].message.push(payload);
      }
      return{
        ...state,
      }
    },
  },
};
