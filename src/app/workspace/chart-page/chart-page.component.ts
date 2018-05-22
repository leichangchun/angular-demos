import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './../workspace.service';
import { ActivatedRoute, ParamMap, UrlSegment} from '@angular/router';
import { flyIn } from './../../common/animations/fly';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss'],
  animations : [flyIn]
})
export class ChartPageComponent implements OnInit {
  // 一级图表参数
  public showEchart = true;
  public echartsData = {};
  public echartLoading = false;

  // 二级下钻图表参数
  public showSec = false;
  public secData = {};
  public secLoading = false;
  public secUrls = ['story', 'story', 'story', 'story', 'story']; // 二级图表的数据接口管理

  public param = null;

  constructor( private workspaceservice: WorkspaceService, private activatedRoute: ActivatedRoute) {
    // 获取路由参数的快照，不会订阅
    this.param = activatedRoute.snapshot.paramMap.get('id');
    console.log(this.param);

    // 动态的获取参数;
    this.activatedRoute.paramMap.subscribe((parame: ParamMap) => {
      console.log(parame);
    });

   }

  ngOnInit() {
    this.getData();
    console.log('chart page OnInit!');
  }

  getData (type = 'people') {
    if (!this.showEchart) {
      this.showEchart = !this.showEchart;
      this.showSec = !this.showSec;
    }
    this.echartsData = null;
    this.echartLoading = true;
    this.workspaceservice.getEchartData(type).then( res => {
      this.echartsData = res;
      this.echartLoading = false;
    });
  }

  onChartInit (ec) {
    // charInit 传递的就是初始化生成的图表实例
    console.log(ec.getHeight());
  }

  onChartClick (ec) {
    console.log(ec);
    if (ec.seriesType === 'pie') {
      this.showEchart = false;
      this.showSec = true;
      this.secLoading = true;
      this.workspaceservice.getEchartData(this.secUrls[ec.seriesIndex]).then( res => {
        this.secData = res;
        this.secLoading = false;
      });
    }
  }
  onChartMouseOver (ec) {
    console.log(ec);
  }

  goBack () {
    this.showSec = false;
    this.showEchart = true;
  }
}
