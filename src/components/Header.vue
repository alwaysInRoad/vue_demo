<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <!-- <a class="navbar-brand" ></a> -->
    <p style="font-size: 20px;color: #FFFFFF;margin-left: 30px">后台管理系统</p>
    <ul class="nav navbar-nav d-md-down-none" style="margin-left: 35px">
      <li class="nav-item" >
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
    </ul>

    <ul class="nav navbar-nav ml-auto" style="margin-right: 35px">
      <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <span class="d-md-down-none">admin</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="alert"></Icon>Updates<span class="badge badge-info">42</span></p>
            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>
            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>
            </Dropdown-item>
            <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>
            </Dropdown-item>
            <Dropdown-item ><p class="dropdown-itemp"><Icon type="android-settings"></Icon> Settings</p></Dropdown-item>
            <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>Logout</p></a></Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  methods: {
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing
    },
    // sidebarToggle (e) {
    //   e.preventDefault()
    //   document.body.classList.toggle('sidebar-hidden')
    // },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    // asideToggle (e) {
    //   e.preventDefault()
    //   document.body.classList.toggle('aside-menu-hidden')
    // }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
/* .header-item .ivu-dropdown-item{
  padding: 15px;
}*/
/*  .header-item{
    width: 130px;
    height: 55px;
  }*/
/*  .header-item a{
        color:white !important;

  }*/

</style>
