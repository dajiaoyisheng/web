<template>
  <div>
    <!-- pn:pointname l:left-->
    <section class="pn-l">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </section>
    <section class="pn-m">
      <div>
        <span>服刑人员</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
      </div>
      <p class="h-line">未到人员列表</p>
      <span>({{pnumno}}人)</span>
      <el-table :data="pnTableDataNo" stripe style="width: 100%">
        <el-table-column prop="starttime" label="编号">
        </el-table-column>
        <el-table-column prop="endtime" label="姓名">
        </el-table-column>
        <el-table-column prop="tyle" label="预警事件类型">
        </el-table-column>
        <el-table-column prop="during" label="最近一次被定位区域">
        </el-table-column>
        <el-table-column prop="during" label="最近一次被定位时间">
        </el-table-column>
        <el-table-column label="视频">
          <template slot-scope="scope">
            <button @click="handleEdit(scope.$index, scope.row)">视频</button>
          </template>
        </el-table-column>
      </el-table>
      <div class="el-pagination-wrap text-center">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
          :page-size="10" layout="prev, pager, next, jumper" :total="this.page">
        </el-pagination>
      </div>
      <p class="h-line">已到人员列表</p>
      <span>({{pnumno}}人)</span>
      <el-table :data="pnTableDataNo" stripe style="width: 100%">
        <el-table-column prop="starttime" label="编号">
        </el-table-column>
        <el-table-column prop="endtime" label="姓名">
        </el-table-column>
        <el-table-column prop="endtime" label="当前区域">
        </el-table-column>
        <el-table-column prop="tyle" label="识别时间">
        </el-table-column>
        <el-table-column prop="during" label="识别方法">
        </el-table-column>
        <el-table-column label="视频">
          <template slot-scope="scope">
            <button @click="handleEdit(scope.$index, scope.row)">视频</button>
          </template>
        </el-table-column>
      </el-table>
      <div class="el-pagination-wrap text-center">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
          :page-size="10" layout="prev, pager, next, jumper" :total="this.page">
        </el-pagination>
      </div>
    </section>
    <section class="pn-r">
      <p class="h-line">监控视频</p>

    </section>




  </div>
</template>
<style>
  .pn-m {
    width: 40%;

  }

</style>
<script>
  export default {
    name: 'pointname',
    data() {
      return {
        loading: false,
        input: '',
        pnumno: '', //未到人数
        pnTableDataNo: [], //未到人数table数据
        value: '',
        currentPage3: 1,
        page: 1,
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created: function () {
      var _this = this;
      this.$ajxj.get('/pPositionData')
        .then(function (res) {
          // _this.loading = false;
          _this.pPositionData = res.data.data
          _this.page = res.data.total
          console.log(_this.page);
        }).catch(function (error) {
          console.log(error);
        }).then(function () {});
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.getTableData(val);
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        // window.location.href = row.tv;
        console.log(index, row);
        window.open(row.tv)
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }

</script>
