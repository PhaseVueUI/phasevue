import type { DefaultPassThrough, PassThrough } from '@phasevueui/core';
import type { PhaseVueCSPOptions, PhaseVueLocaleOptions, PhaseVueZIndexOptions } from '@phasevueui/core/config';
import type { AccordionPassThroughOptions } from 'phasevue/accordion';
import type { AccordionContentPassThroughOptions } from 'phasevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'phasevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'phasevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'phasevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'phasevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'phasevue/autocomplete';
import type { AvatarPassThroughOptions } from 'phasevue/avatar';
import type { AvatarGroupPassThroughOptions } from 'phasevue/avatargroup';
import type { BadgePassThroughOptions } from 'phasevue/badge';
import type { BadgeDirectivePassThroughOptions } from 'phasevue/badgedirective';
import type { BlockUIPassThroughOptions } from 'phasevue/blockui';
import type { BreadcrumbPassThroughOptions } from 'phasevue/breadcrumb';
import type { ButtonPassThroughOptions } from 'phasevue/button';
import type { ButtonGroupPassThroughOptions } from 'phasevue/buttongroup';
import type { CalendarPassThroughOptions } from 'phasevue/calendar';
import type { CardPassThroughOptions } from 'phasevue/card';
import type { CarouselPassThroughOptions } from 'phasevue/carousel';
import type { CascadeSelectPassThroughOptions } from 'phasevue/cascadeselect';
import type { ChartPassThroughOptions } from 'phasevue/chart';
import type { CheckboxPassThroughOptions } from 'phasevue/checkbox';
import type { CheckboxGroupPassThroughOptions } from 'phasevue/checkboxgroup';
import type { ChipPassThroughOptions } from 'phasevue/chip';
import type { ChipsPassThroughOptions } from 'phasevue/chips';
import type { ColorPickerPassThroughOptions } from 'phasevue/colorpicker';
import type { ColumnPassThroughOptions } from 'phasevue/column';
import type { ColumnGroupPassThroughOptions } from 'phasevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'phasevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'phasevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'phasevue/contextmenu';
import type { DataTablePassThroughOptions } from 'phasevue/datatable';
import type { DataViewPassThroughOptions } from 'phasevue/dataview';
import type { DatePickerPassThroughOptions } from 'phasevue/datepicker';
import type { DeferredContentPassThroughOptions } from 'phasevue/deferredcontent';
import type { DialogPassThroughOptions } from 'phasevue/dialog';
import type { DividerPassThroughOptions } from 'phasevue/divider';
import type { DockPassThroughOptions } from 'phasevue/dock';
import type { DrawerPassThroughOptions } from 'phasevue/drawer';
import type { DropdownPassThroughOptions } from 'phasevue/dropdown';
import type { EditorPassThroughOptions } from 'phasevue/editor';
import type { FieldsetPassThroughOptions } from 'phasevue/fieldset';
import type { FileUploadPassThroughOptions } from 'phasevue/fileupload';
import type { FloatLabelPassThroughOptions } from 'phasevue/floatlabel';
import type { FluidPassThroughOptions } from 'phasevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'phasevue/focustrap';
import type { GalleriaPassThroughOptions } from 'phasevue/galleria';
import type { IconFieldPassThroughOptions } from 'phasevue/iconfield';
import type { IftaLabelPassThroughOptions } from 'phasevue/iftalabel';
import type { ImagePassThroughOptions } from 'phasevue/image';
import type { ImageComparePassThroughOptions } from 'phasevue/imagecompare';
import type { InlineMessagePassThroughOptions } from 'phasevue/inlinemessage';
import type { InplacePassThroughOptions } from 'phasevue/inplace';
import type { InputChipsPassThroughOptions } from 'phasevue/inputchips';
import type { InputGroupPassThroughOptions } from 'phasevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'phasevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'phasevue/inputicon';
import type { InputMaskPassThroughOptions } from 'phasevue/inputmask';
import type { InputNumberPassThroughOptions } from 'phasevue/inputnumber';
import type { InputOtpPassThroughOptions } from 'phasevue/inputotp';
import type { InputSwitchPassThroughOptions } from 'phasevue/inputswitch';
import type { InputTextPassThroughOptions } from 'phasevue/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from 'phasevue/keyfilter';
import type { KnobPassThroughOptions } from 'phasevue/knob';
import type { ListboxPassThroughOptions } from 'phasevue/listbox';
import type { MegaMenuPassThroughOptions } from 'phasevue/megamenu';
import type { MenuPassThroughOptions } from 'phasevue/menu';
import type { MenubarPassThroughOptions } from 'phasevue/menubar';
import type { MessagePassThroughOptions } from 'phasevue/message';
import type { MeterGroupPassThroughOptions } from 'phasevue/metergroup';
import type { MultiSelectPassThroughOptions } from 'phasevue/multiselect';
import type { OrderListPassThroughOptions } from 'phasevue/orderlist';
import type { OrganizationChartPassThroughOptions } from 'phasevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'phasevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'phasevue/overlaypanel';
import type { PaginatorPassThroughOptions } from 'phasevue/paginator';
import type { PanelPassThroughOptions } from 'phasevue/panel';
import type { PanelMenuPassThroughOptions } from 'phasevue/panelmenu';
import type { PassThroughOptions } from 'phasevue/passthrough';
import type { PasswordPassThroughOptions } from 'phasevue/password';
import type { PickListPassThroughOptions } from 'phasevue/picklist';
import type { PopoverPassThroughOptions } from 'phasevue/popover';
import type { ProgressBarPassThroughOptions } from 'phasevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'phasevue/progressspinner';
import type { RadioButtonPassThroughOptions } from 'phasevue/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from 'phasevue/radiobuttongroup';
import type { RatingPassThroughOptions } from 'phasevue/rating';
import type { RippleDirectivePassThroughOptions } from 'phasevue/ripple';
import type { RowPassThroughOptions } from 'phasevue/row';
import type { ScrollPanelPassThroughOptions } from 'phasevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'phasevue/scrolltop';
import type { SelectPassThroughOptions } from 'phasevue/select';
import type { SelectButtonPassThroughOptions } from 'phasevue/selectbutton';
import type { SidebarPassThroughOptions } from 'phasevue/sidebar';
import type { SkeletonPassThroughOptions } from 'phasevue/skeleton';
import type { SliderPassThroughOptions } from 'phasevue/slider';
import type { SpeedDialPassThroughOptions } from 'phasevue/speeddial';
import type { SplitButtonPassThroughOptions } from 'phasevue/splitbutton';
import type { SplitterPassThroughOptions } from 'phasevue/splitter';
import type { SplitterPanelPassThroughOptions } from 'phasevue/splitterpanel';
import type { StepPassThroughOptions } from 'phasevue/step';
import type { StepItemPassThroughOptions } from 'phasevue/stepitem';
import type { StepListPassThroughOptions } from 'phasevue/steplist';
import type { StepPanelPassThroughOptions } from 'phasevue/steppanel';
import type { StepPanelsPassThroughOptions } from 'phasevue/steppanels';
import type { StepperPassThroughOptions } from 'phasevue/stepper';
import type { StepsPassThroughOptions } from 'phasevue/steps';
import type { StyleClassDirectivePassThroughOptions } from 'phasevue/styleclass';
import type { TabPassThroughOptions } from 'phasevue/tab';
import type { TabListPassThroughOptions } from 'phasevue/tablist';
import type { TabMenuPassThroughOptions } from 'phasevue/tabmenu';
import type { TabPanelPassThroughOptions } from 'phasevue/tabpanel';
import type { TabPanelsPassThroughOptions } from 'phasevue/tabpanels';
import type { TabsPassThroughOptions } from 'phasevue/tabs';
import type { TabViewPassThroughOptions } from 'phasevue/tabview';
import type { TagPassThroughOptions } from 'phasevue/tag';
import type { TerminalPassThroughOptions } from 'phasevue/terminal';
import type { TextareaPassThroughOptions } from 'phasevue/textarea';
import type { TieredMenuPassThroughOptions } from 'phasevue/tieredmenu';
import type { TimelinePassThroughOptions } from 'phasevue/timeline';
import type { ToastPassThroughOptions } from 'phasevue/toast';
import type { ToggleButtonPassThroughOptions } from 'phasevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'phasevue/toggleswitch';
import type { ToolbarPassThroughOptions } from 'phasevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'phasevue/tooltip';
import type { TreePassThroughOptions } from 'phasevue/tree';
import type { TreeSelectPassThroughOptions } from 'phasevue/treeselect';
import type { TreeTablePassThroughOptions } from 'phasevue/treetable';
import type { VirtualScrollerPassThroughOptions } from 'phasevue/virtualscroller';

export * from '@phasevueui/core/config';
export { default } from '@phasevueui/core/config';

export interface PhaseVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: PhaseVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PhaseVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PhaseVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PhaseVueCSPOptions;
}

export interface PhaseVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
