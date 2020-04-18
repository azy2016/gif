const jsonData = require('./content/db.json');
exports.createPages = async ({ actions: { createPage } }) => {
    const NUM = 20; //每页数据数量
    const page = Math.ceil(jsonData.length / NUM); //总页数
    let chuckData = []; //存储每页的数据
    let nowPage = 1; //当前页数
    let tagsData = {};
    let rootPath = '/';
    jsonData.forEach((data,index,obj) => {
        chuckData.push(data);
        if (chuckData.length >= NUM || index === obj.length - 1){
            createPage({
                path: nowPage === 1 ? rootPath : `${rootPath}page/${nowPage}`,
                component: require.resolve(`./src/templates/index.js`),
                context: { 
                    rootPath,
                    chuckData,
                    nowPage,
                    page,
                },
            })
            nowPage++;
            chuckData = [];
        }

        data.tags.forEach((tag, key) => {
            if(tag.id in tagsData) {
                tagsData[tag.id].push(data);
            }else{
                tagsData[tag.id] = [data];
            }
        })

  })

  function createPageself(rootPath, objs) {
    let page = Math.ceil(objs.length / NUM); //总页数
    let chuckData = []; //存储每页的数据
    let nowPage = 1; //当前页数
    objs.forEach((data,index,obj) => {
        chuckData.push(data);
        if (chuckData.length >= NUM || index === obj.length - 1){
            createPage({
                path: nowPage === 1 ? rootPath : `${rootPath}page/${nowPage}`,
                component: require.resolve(`./src/templates/index.js`),
                context: { 
                    rootPath,
                    chuckData,
                    nowPage,
                    page,
                },
            })
            nowPage++;
            chuckData = [];
        }
  })
  }

 for(let key in tagsData) {
    createPageself(`/tags/${key}/`, tagsData[key]);
 }
}