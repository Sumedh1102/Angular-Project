import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailWriterComponent } from './gmail-writer.component';

describe('GmailWriterComponent', () => {
  let component: GmailWriterComponent;
  let fixture: ComponentFixture<GmailWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
