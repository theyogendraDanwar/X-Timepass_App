import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatblockComponent } from './chatblock.component';

describe('ChatblockComponent', () => {
  let component: ChatblockComponent;
  let fixture: ComponentFixture<ChatblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
