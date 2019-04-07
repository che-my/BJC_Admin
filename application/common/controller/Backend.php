<?php
namespace app\common\controller;
use think\Controller;

/**
 * 后台基类
 */
class Backend extends Controller {

    /**
     * 定义模板布局文件
     *
     * @var string
     */
    protected $layout = 'layout/default';

    public function initialize(){
        if($this->layout){
            $this->view->engine->layout($this->layout);
        }
        parent::initialize();
    }
}