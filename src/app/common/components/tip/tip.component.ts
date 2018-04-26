import { Component, OnInit , Input} from '@angular/core';
import { TipService } from './tip.service';
import { TipConfig , TipType} from './../../type/data-type';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {

  // 配置项
  public tipConfig: TipConfig = {
    showTip : false,
    tipText : '',
    showClose : true,
    type : TipType.success
  };

  public iconClass = 'fa-thumbs-up';

  // 防止遗留定时器的影响
  private autoClose = null;
  constructor(
    private tipservice: TipService
  ) {
    this.tipservice.toggleTipStatu().subscribe(res => {

      this.tipConfig = Object.assign({}, this.tipConfig, res);
      this.iconClass = this.getIcon();

      // 如果之前有定时器，清除
      if (this.autoClose) {
        window.clearTimeout(this.autoClose);
      }
      this.autoClose =  setTimeout( () => {
        if (this.tipConfig.showTip) {
          this.close();
        }
      }, 5000);
    });
   }

  ngOnInit() {
  }

  close() {
    this.tipservice.$showtip.next(
      {
        showTip : false,
        tipText : ''
      }
    );
  }

  getIcon () {
    switch (this.tipConfig.type) {
      case 0:
        return 'fa-thumbs-up';
      case 1:
        return 'fa-warning';
      case 2:
        return 'fa-window-close';
      default:
        return 'fa-thumbs-up';
    }
  }
}
