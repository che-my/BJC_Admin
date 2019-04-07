<?php
namespace app\admin\controller;
use app\common\Controller\Backend;

/**
 * 后台首页
 */
class Index extends Backend {

    public function index(){
        $this->view->engine->layout(false);
        return $this->view->fetch();
    }

    public function index_v2(){
        return $this->view->fetch();
    }

    public function dash1(){
        return $this->view->fetch();
    }

    public function dash_1(){
        return $this->view->fetch();
    }

    public function dash_2(){
        return $this->view->fetch();
    }
    public function dash_3(){
        return $this->view->fetch();
    }
    public function dash_4(){
        return $this->view->fetch();
    }
}
