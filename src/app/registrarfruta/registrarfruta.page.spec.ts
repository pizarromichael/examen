import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarfrutaPage } from './registrarfruta.page';

describe('RegistrarfrutaPage', () => {
  let component: RegistrarfrutaPage;
  let fixture: ComponentFixture<RegistrarfrutaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarfrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
