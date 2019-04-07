<?php
/*
 * @Description: 
 * @Author: che-my
 * @LastEditors: che-my
 * @Date: 2019-04-06 02:33:20
 * @LastEditTime: 2019-04-06 05:34:14
 */
namespace app\admin\widget;
use think\Controller;

class Common extends Controller {

    public function meta()
    {
        return $this->fetch('common/meta');
    }

    public function header()
    {
        return $this->fetch('common/header');
    }
    
    public function breadcrumb()
    {
        return $this->fetch('common/breadcrumb');
    }
    
    public function menu()
    {
        return $this->fetch('common/menu');
    }

    public function script()
    {
        return $this->fetch('common/script');
    }
}