import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let fixture: ComponentFixture<SettingsPage>;
  let component: SettingsPage;
  beforeEach(() => {
    document.documentElement.classList.remove('ion-palette-dark');
    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => document.documentElement.classList.remove('ion-palette-dark'));

  it('should create', () => expect(component).toBeTruthy());

  it('turns the page palette on and off through the toggle event', async () => {
    await fixture.whenStable();
    const toggle = fixture.nativeElement.querySelector('ion-toggle');
    toggle.checked = true;
    toggle.dispatchEvent(new CustomEvent('ionChange', { detail: { checked: true } }));
    fixture.detectChanges();
    expect(component.darkMode).toBe(true);
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBe(true);
    toggle.checked = false;
    toggle.dispatchEvent(new CustomEvent('ionChange', { detail: { checked: false } }));
    fixture.detectChanges();
    expect(component.darkMode).toBe(false);
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBe(false);
  });

  it('reads the existing mode when the settings page is entered again', () => {
    document.documentElement.classList.add('ion-palette-dark');
    component.ionViewWillEnter();
    expect(component.darkMode).toBe(true);
  });
});
