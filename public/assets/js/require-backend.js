require.config({
    // urlArgs: "v=" + requirejs.s.contexts._.config.config.site.version,
    urlArgs: "v=" + (new Date()).getTime(),
    packages: [{
            name: 'moment',
            location: '../plugins/moment.min',
            main: 'moment'
    }],
    //在打包压缩时将会把include中的模块合并到主文件中
    include: [],
    paths: {
        'apps': '../js/apps',
        'default': '../js/theme/default.min',
        'dashboard':'../js/demo/dashboard',
        'jquery': '../plugins/jquery/jquery-3.3.1.min',
        'jquery1.8.2': '../plugins/jquery/jquery-1.8.2.min',
        'jquery1.9.1': '../plugins/jquery/jquery-1.9.1.min',
        'jquery3.2.1': '../plugins/jquery/jquery-3.2.1.min',
        'jqueryUi': '../plugins/jquery-ui/jquery-ui.min',
        'bootstrap': '../plugins/bootstrap/js/bootstrap.bundle.min',
        'slimscroll': '../plugins/slimscroll/jquery.slimscroll.min',
        'jsCookie': '../plugins/js-cookie/js.cookie',
        'pace': '../plugins/pace/pace.min',
        'gritter': '../plugins/gritter/js/jquery.gritter',
        'flot': '../plugins/flot/jquery.flot.min',
        'flot_time': '../plugins/flot/jquery.flot.time.min',
        'flot_resize': '../plugins/flot/jquery.flot.resize.min',
        'flot_pie': '../plugins/flot/jquery.flot.pie.min',
        'sparkline': '../plugins/sparkline/jquery.sparkline',
        'jvectormap': '../plugins/jquery-jvectormap/jquery-jvectormap.min',
        'jwme': '../plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en',
        'datepicker': '../plugins/bootstrap-datepicker/js/bootstrap-datepicker'
    },
    // shim依赖配置
    shim: {
        'bootstrap': ['jquery'],
        'apps':['jquery','jqueryUi','bootstrap','jsCookie','slimscroll','default','pace'],
        'slimscroll': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'dashboard':['jquery','flot','sparkline','jvectormap','jwme']
    },
    baseUrl: requirejs.s.contexts._.config.config.site.cdnurl + '/assets/js/', //资源基础路径
    map: {
        '*': {}
    },
    waitSeconds: 30,
    charset: 'utf-8' // 文件编码
});

require(['jquery', 'bootstrap'], function ($, undefined) {
    //初始配置
    var Config = requirejs.s.contexts._.config.config;
    //将Config渲染到全局
    window.Config = Config;
    // 配置语言包的路径
    var paths = {};
    // paths['lang'] = 'lang';
    //如果语言包想要动态加载，则使用下面一行
    //paths['lang'] = Config.moduleurl + 'lang?callback=define&controllername=' + Config.controllername;
    // 避免目录冲突
    paths['backend/'] = 'backend/';
    require.config({paths: paths});

    // 初始化
    $(function () {
        require(['apps'], function (App) {
            //加载相应模块
            if (Config.jsname) {
                require([Config.jsname], function (Controller) {
                    Controller[Config.actionname] != undefined && Controller[Config.actionname]();
                }, function (e) {
                    console.error(e);
                    // 这里可捕获模块加载的错误
                });
            }
        });
    });
});
