import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEditorComponent } from './students-editor.component';

describe('StudentsEditorComponent', () => {
  let component: StudentsEditorComponent;
  let fixture: ComponentFixture<StudentsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsEditorComponent]
    });
    fixture = TestBed.createComponent(StudentsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
