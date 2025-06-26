import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDetalhesComponent } from './filme-detalhes.component';

describe('FilmeDetalhesComponent', () => {
  let component: FilmeDetalhesComponent;
  let fixture: ComponentFixture<FilmeDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
