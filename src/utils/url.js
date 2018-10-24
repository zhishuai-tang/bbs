
function encodeFilter(filter) {
    return encodeURIComponent(JSON.stringify(filter));
}

export default {
    
    // 登录
    login: () => "/user/login",

    // 获取帖子列表
    getPostList: () => `/post?filter=${encodeFilter("")}`,

    // 获取帖子详情
    getPostById: id => `/post?filter=${encodeFilter("")}`,

    // 新建帖子
    createPost: () => '/post',

    // 修改帖子
    updatePost: (id) => `/post/${id}`,

    // 获取评论列表
    getCommentList: postId => `/comment?filter=${encodeFilter("")}`,

    // 新建评论
    createComment: () => '/comment'
}