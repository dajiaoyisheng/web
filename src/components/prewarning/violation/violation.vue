<template>
  <div>
    <section>
      <div class="block">
        <span class="demonstration">时期</span>
        <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="pickerOptions2">
        </el-date-picker>
      </div>

    </section>

    <section>
      <span>预警事件类型：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </section>
    <section>
      <span>服刑人员类型：</span>
    </section>
    <section>
      <span>服刑人员姓名/编号：：</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </section>
    <section>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </section>
    <section>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </section>
    <vue-loading v-show="loading" type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>

<script>
  export default {
    name: 'violation',
    data() {
      return {
        loading: false,
        // 时间筛选
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value7: '',
        // 预警事件类型
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        // 服刑人员类型
        input: '',
        // 
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      submit() {
        this.loading = true
        provider.login(this, this.formData).then(data => {
          // provider.login(this, {UserPo: this.formData}).then(data => {
          this.loading = false
          if (data.body.header.status === 1) {
            localStorage.setItem('token', data.body.body.token)
            console.log(localStorage.getItem('token'))
            localStorage.setItem('userInfo', JSON.stringify(data.body.userInfo))
            this.$router.push({
              path: '/prewarning'
            })
          } else {
            // alert(data.body.errorMessage)
            alert(data.body.body.errorMessage)
          }
        })
      }
    }
  }

</script>
