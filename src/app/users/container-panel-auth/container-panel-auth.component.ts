import {Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, OnInit, OnDestroy} from '@angular/core';
import {UnauthPanelComponent} from "../unauth-panel/unauth-panel.component";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthPanelComponent} from "../auth-panel/auth-panel.component";

@Component({
  selector: 'app-container-panel-auth',
  templateUrl: './container-panel-auth.component.html',
  entryComponents: [ UnauthPanelComponent, AuthPanelComponent ],
  styleUrls: ['./container-panel-auth.component.scss']
})
export class ContainerPanelAuthComponent implements OnInit, OnDestroy {

  @ViewChild('containerPanelAuthComponent', {read: ViewContainerRef}) containerPanelAuthComponent: ViewContainerRef;
  private authRef: ComponentRef<any>;
  subscription: Subscription;

  constructor(private resolver: ComponentFactoryResolver, private userService: UserService) { }

  ngOnInit() {

    this.subscription = this.userService.authSubject.subscribe((msg)=>{
      if (this.userService.statusAuth == 0) this.unAuth();
      else this.auth();
    })
  }

  unAuth(){
    let factories = Array.from(this.resolver['_factories'].keys());
    let factoryClass = <Type<any>> factories.find((factory: any) => factory.name === 'UnauthPanelComponent');
    let unauthPanelComponentComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    this.authRef = this.containerPanelAuthComponent.createComponent(unauthPanelComponentComponentFactory);
  }

  auth(){
    let factories = Array.from(this.resolver['_factories'].keys());
    let factoryClass = <Type<any>> factories.find((factory: any) => factory.name === 'AuthPanelComponent');
    let AuthPanelComponentComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    this.authRef = this.containerPanelAuthComponent.createComponent(AuthPanelComponentComponentFactory);
  }
  ngOnDestroy(): void {
    if(this.authRef){
      this.authRef.destroy();
    }
  }

}
