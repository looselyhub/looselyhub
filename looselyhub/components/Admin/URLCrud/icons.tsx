const ICONS = [
  {
    name: '10k',
    code: 'e951',
  },
  {
    name: '10mp',
    code: 'e952',
  },
  {
    name: '11mp',
    code: 'e953',
  },
  {
    name: '12mp',
    code: 'e954',
  },
  {
    name: '13mp',
    code: 'e955',
  },
  {
    name: '14mp',
    code: 'e956',
  },
  {
    name: '15mp',
    code: 'e957',
  },
  {
    name: '16mp',
    code: 'e958',
  },
  {
    name: '17mp',
    code: 'e959',
  },
  {
    name: '18mp',
    code: 'e95a',
  },
  {
    name: '19mp',
    code: 'e95b',
  },
  {
    name: '1k',
    code: 'e95c',
  },
  {
    name: '1k_plus',
    code: 'e95d',
  },
  {
    name: '1x_mobiledata',
    code: 'efcd',
  },
  {
    name: '20mp',
    code: 'e95e',
  },
  {
    name: '21mp',
    code: 'e95f',
  },
  {
    name: '22mp',
    code: 'e960',
  },
  {
    name: '23mp',
    code: 'e961',
  },
  {
    name: '24mp',
    code: 'e962',
  },
  {
    name: '2k',
    code: 'e963',
  },
  {
    name: '2k_plus',
    code: 'e964',
  },
  {
    name: '2mp',
    code: 'e965',
  },
  {
    name: '30fps',
    code: 'efce',
  },
  {
    name: '30fps_select',
    code: 'efcf',
  },
  {
    name: 360,
    code: 'e577',
  },
  {
    name: '3d_rotation',
    code: 'e84d',
  },
  {
    name: '3g_mobiledata',
    code: 'efd0',
  },
  {
    name: '3k',
    code: 'e966',
  },
  {
    name: '3k_plus',
    code: 'e967',
  },
  {
    name: '3mp',
    code: 'e968',
  },
  {
    name: '3p',
    code: 'efd1',
  },
  {
    name: '4g_mobiledata',
    code: 'efd2',
  },
  {
    name: '4g_plus_mobiledata',
    code: 'efd3',
  },
  {
    name: '4k',
    code: 'e072',
  },
  {
    name: '4k_plus',
    code: 'e969',
  },
  {
    name: '4mp',
    code: 'e96a',
  },
  {
    name: '5g',
    code: 'ef38',
  },
  {
    name: '5k',
    code: 'e96b',
  },
  {
    name: '5k_plus',
    code: 'e96c',
  },
  {
    name: '5mp',
    code: 'e96d',
  },
  {
    name: '60fps',
    code: 'efd4',
  },
  {
    name: '60fps_select',
    code: 'efd5',
  },
  {
    name: '6_ft_apart',
    code: 'f21e',
  },
  {
    name: '6k',
    code: 'e96e',
  },
  {
    name: '6k_plus',
    code: 'e96f',
  },
  {
    name: '6mp',
    code: 'e970',
  },
  {
    name: '7k',
    code: 'e971',
  },
  {
    name: '7k_plus',
    code: 'e972',
  },
  {
    name: '7mp',
    code: 'e973',
  },
  {
    name: '8k',
    code: 'e974',
  },
  {
    name: '8k_plus',
    code: 'e975',
  },
  {
    name: '8mp',
    code: 'e976',
  },
  {
    name: '9k',
    code: 'e977',
  },
  {
    name: '9k_plus',
    code: 'e978',
  },
  {
    name: '9mp',
    code: 'e979',
  },
  {
    name: 'ac_unit',
    code: 'eb3b',
  },
  {
    name: 'access_alarm',
    code: 'e190',
  },
  {
    name: 'access_alarms',
    code: 'e191',
  },
  {
    name: 'access_time',
    code: 'e192',
  },
  {
    name: 'access_time_filled',
    code: 'efd6',
  },
  {
    name: 'accessibility',
    code: 'e84e',
  },
  {
    name: 'accessibility_new',
    code: 'e92c',
  },
  {
    name: 'accessible',
    code: 'e914',
  },
  {
    name: 'accessible_forward',
    code: 'e934',
  },
  {
    name: 'account_balance',
    code: 'e84f',
  },
  {
    name: 'account_balance_wallet',
    code: 'e850',
  },
  {
    name: 'account_box',
    code: 'e851',
  },
  {
    name: 'account_circle',
    code: 'e853',
  },
  {
    name: 'account_tree',
    code: 'e97a',
  },
  {
    name: 'ad_units',
    code: 'ef39',
  },
  {
    name: 'adb',
    code: 'e60e',
  },
  {
    name: 'add',
    code: 'e145',
  },
  {
    name: 'add_a_photo',
    code: 'e439',
  },
  {
    name: 'add_alarm',
    code: 'e193',
  },
  {
    name: 'add_alert',
    code: 'e003',
  },
  {
    name: 'add_box',
    code: 'e146',
  },
  {
    name: 'add_business',
    code: 'e729',
  },
  {
    name: 'add_call',
    code: 'e0e8',
  },
  {
    name: 'add_chart',
    code: 'e97b',
  },
  {
    name: 'add_circle',
    code: 'e147',
  },
  {
    name: 'add_circle_outline',
    code: 'e148',
  },
  {
    name: 'add_comment',
    code: 'e266',
  },
  {
    name: 'add_ic_call',
    code: 'e97c',
  },
  {
    name: 'add_link',
    code: 'e178',
  },
  {
    name: 'add_location',
    code: 'e567',
  },
  {
    name: 'add_location_alt',
    code: 'ef3a',
  },
  {
    name: 'add_moderator',
    code: 'e97d',
  },
  {
    name: 'add_photo_alternate',
    code: 'e43e',
  },
  {
    name: 'add_reaction',
    code: 'e1d3',
  },
  {
    name: 'add_road',
    code: 'ef3b',
  },
  {
    name: 'add_shopping_cart',
    code: 'e854',
  },
  {
    name: 'add_task',
    code: 'f23a',
  },
  {
    name: 'add_to_drive',
    code: 'e65c',
  },
  {
    name: 'add_to_home_screen',
    code: 'e1fe',
  },
  {
    name: 'add_to_photos',
    code: 'e39d',
  },
  {
    name: 'add_to_queue',
    code: 'e05c',
  },
  {
    name: 'addchart',
    code: 'ef3c',
  },
  {
    name: 'adjust',
    code: 'e39e',
  },
  {
    name: 'admin_panel_settings',
    code: 'ef3d',
  },
  {
    name: 'ads_click',
    code: 'e762',
  },
  {
    name: 'agriculture',
    code: 'ea79',
  },
  {
    name: 'air',
    code: 'efd8',
  },
  {
    name: 'airline_seat_flat',
    code: 'e630',
  },
  {
    name: 'airline_seat_flat_angled',
    code: 'e631',
  },
  {
    name: 'airline_seat_individual_suite',
    code: 'e632',
  },
  {
    name: 'airline_seat_legroom_extra',
    code: 'e633',
  },
  {
    name: 'airline_seat_legroom_normal',
    code: 'e634',
  },
  {
    name: 'airline_seat_legroom_reduced',
    code: 'e635',
  },
  {
    name: 'airline_seat_recline_extra',
    code: 'e636',
  },
  {
    name: 'airline_seat_recline_normal',
    code: 'e637',
  },
  {
    name: 'airplane_ticket',
    code: 'efd9',
  },
  {
    name: 'airplanemode_active',
    code: 'e195',
  },
  {
    name: 'airplanemode_inactive',
    code: 'e194',
  },
  {
    name: 'airplanemode_off',
    code: 'e194',
  },
  {
    name: 'airplanemode_on',
    code: 'e195',
  },
  {
    name: 'airplay',
    code: 'e055',
  },
  {
    name: 'airport_shuttle',
    code: 'eb3c',
  },
  {
    name: 'alarm',
    code: 'e855',
  },
  {
    name: 'alarm_add',
    code: 'e856',
  },
  {
    name: 'alarm_off',
    code: 'e857',
  },
  {
    name: 'alarm_on',
    code: 'e858',
  },
  {
    name: 'album',
    code: 'e019',
  },
  {
    name: 'align_horizontal_center',
    code: 'e00f',
  },
  {
    name: 'align_horizontal_left',
    code: 'e00d',
  },
  {
    name: 'align_horizontal_right',
    code: 'e010',
  },
  {
    name: 'align_vertical_bottom',
    code: 'e015',
  },
  {
    name: 'align_vertical_center',
    code: 'e011',
  },
  {
    name: 'align_vertical_top',
    code: 'e00c',
  },
  {
    name: 'all_inbox',
    code: 'e97f',
  },
  {
    name: 'all_inclusive',
    code: 'eb3d',
  },
  {
    name: 'all_out',
    code: 'e90b',
  },
  {
    name: 'alt_route',
    code: 'f184',
  },
  {
    name: 'alternate_email',
    code: 'e0e6',
  },
  {
    name: 'amp_stories',
    code: 'ea13',
  },
  {
    name: 'analytics',
    code: 'ef3e',
  },
  {
    name: 'anchor',
    code: 'f1cd',
  },
  {
    name: 'android',
    code: 'e859',
  },
  {
    name: 'animation',
    code: 'e71c',
  },
  {
    name: 'announcement',
    code: 'e85a',
  },
  {
    name: 'aod',
    code: 'efda',
  },
  {
    name: 'apartment',
    code: 'ea40',
  },
  {
    name: 'api',
    code: 'f1b7',
  },
  {
    name: 'app_blocking',
    code: 'ef3f',
  },
  {
    name: 'app_registration',
    code: 'ef40',
  },
  {
    name: 'app_settings_alt',
    code: 'ef41',
  },
  {
    name: 'approval',
    code: 'e982',
  },
  {
    name: 'apps',
    code: 'e5c3',
  },
  {
    name: 'architecture',
    code: 'ea3b',
  },
  {
    name: 'archive',
    code: 'e149',
  },
  {
    name: 'area_chart',
    code: 'e770',
  },
  {
    name: 'arrow_back',
    code: 'e5c4',
  },
  {
    name: 'arrow_back_ios',
    code: 'e5e0',
  },
  {
    name: 'arrow_back_ios_new',
    code: 'e2ea',
  },
  {
    name: 'arrow_circle_down',
    code: 'f181',
  },
  {
    name: 'arrow_circle_up',
    code: 'f182',
  },
  {
    name: 'arrow_downward',
    code: 'e5db',
  },
  {
    name: 'arrow_drop_down',
    code: 'e5c5',
  },
  {
    name: 'arrow_drop_down_circle',
    code: 'e5c6',
  },
  {
    name: 'arrow_drop_up',
    code: 'e5c7',
  },
  {
    name: 'arrow_forward',
    code: 'e5c8',
  },
  {
    name: 'arrow_forward_ios',
    code: 'e5e1',
  },
  {
    name: 'arrow_left',
    code: 'e5de',
  },
  {
    name: 'arrow_right',
    code: 'e5df',
  },
  {
    name: 'arrow_right_alt',
    code: 'e941',
  },
  {
    name: 'arrow_upward',
    code: 'e5d8',
  },
  {
    name: 'art_track',
    code: 'e060',
  },
  {
    name: 'article',
    code: 'ef42',
  },
  {
    name: 'aspect_ratio',
    code: 'e85b',
  },
  {
    name: 'assessment',
    code: 'e85c',
  },
  {
    name: 'assignment',
    code: 'e85d',
  },
  {
    name: 'assignment_ind',
    code: 'e85e',
  },
  {
    name: 'assignment_late',
    code: 'e85f',
  },
  {
    name: 'assignment_return',
    code: 'e860',
  },
  {
    name: 'assignment_returned',
    code: 'e861',
  },
  {
    name: 'assignment_turned_in',
    code: 'e862',
  },
  {
    name: 'assistant',
    code: 'e39f',
  },
  {
    name: 'assistant_direction',
    code: 'e988',
  },
  {
    name: 'assistant_navigation',
    code: 'e989',
  },
  {
    name: 'assistant_photo',
    code: 'e3a0',
  },
  {
    name: 'atm',
    code: 'e573',
  },
  {
    name: 'attach_email',
    code: 'ea5e',
  },
  {
    name: 'attach_file',
    code: 'e226',
  },
  {
    name: 'attach_money',
    code: 'e227',
  },
  {
    name: 'attachment',
    code: 'e2bc',
  },
  {
    name: 'attractions',
    code: 'ea52',
  },
  {
    name: 'attribution',
    code: 'efdb',
  },
  {
    name: 'audiotrack',
    code: 'e3a1',
  },
  {
    name: 'auto_awesome',
    code: 'e65f',
  },
  {
    name: 'auto_awesome_mosaic',
    code: 'e660',
  },
  {
    name: 'auto_awesome_motion',
    code: 'e661',
  },
  {
    name: 'auto_delete',
    code: 'ea4c',
  },
  {
    name: 'auto_fix_high',
    code: 'e663',
  },
  {
    name: 'auto_fix_normal',
    code: 'e664',
  },
  {
    name: 'auto_fix_off',
    code: 'e665',
  },
  {
    name: 'auto_graph',
    code: 'e4fb',
  },
  {
    name: 'auto_stories',
    code: 'e666',
  },
  {
    name: 'autofps_select',
    code: 'efdc',
  },
  {
    name: 'autorenew',
    code: 'e863',
  },
  {
    name: 'av_timer',
    code: 'e01b',
  },
  {
    name: 'baby_changing_station',
    code: 'f19b',
  },
  {
    name: 'back_hand',
    code: 'e764',
  },
  {
    name: 'backpack',
    code: 'f19c',
  },
  {
    name: 'backspace',
    code: 'e14a',
  },
  {
    name: 'backup',
    code: 'e864',
  },
  {
    name: 'backup_table',
    code: 'ef43',
  },
  {
    name: 'badge',
    code: 'ea67',
  },
  {
    name: 'bakery_dining',
    code: 'ea53',
  },
  {
    name: 'balcony',
    code: 'e58f',
  },
  {
    name: 'ballot',
    code: 'e172',
  },
  {
    name: 'bar_chart',
    code: 'e26b',
  },
  {
    name: 'batch_prediction',
    code: 'f0f5',
  },
  {
    name: 'bathroom',
    code: 'efdd',
  },
  {
    name: 'bathtub',
    code: 'ea41',
  },
  {
    name: 'battery_alert',
    code: 'e19c',
  },
  {
    name: 'battery_charging_full',
    code: 'e1a3',
  },
  {
    name: 'battery_full',
    code: 'e1a4',
  },
  {
    name: 'battery_saver',
    code: 'efde',
  },
  {
    name: 'battery_std',
    code: 'e1a5',
  },
  {
    name: 'battery_unknown',
    code: 'e1a6',
  },
  {
    name: 'beach_access',
    code: 'eb3e',
  },
  {
    name: 'bed',
    code: 'efdf',
  },
  {
    name: 'bedroom_baby',
    code: 'efe0',
  },
  {
    name: 'bedroom_child',
    code: 'efe1',
  },
  {
    name: 'bedroom_parent',
    code: 'efe2',
  },
  {
    name: 'bedtime',
    code: 'ef44',
  },
  {
    name: 'beenhere',
    code: 'e52d',
  },
  {
    name: 'bento',
    code: 'f1f4',
  },
  {
    name: 'bike_scooter',
    code: 'ef45',
  },
  {
    name: 'biotech',
    code: 'ea3a',
  },
  {
    name: 'blender',
    code: 'efe3',
  },
  {
    name: 'block',
    code: 'e14b',
  },
  {
    name: 'block_flipped',
    code: 'ef46',
  },
  {
    name: 'bloodtype',
    code: 'efe4',
  },
  {
    name: 'bluetooth',
    code: 'e1a7',
  },
  {
    name: 'bluetooth_audio',
    code: 'e60f',
  },
  {
    name: 'bluetooth_connected',
    code: 'e1a8',
  },
  {
    name: 'bluetooth_disabled',
    code: 'e1a9',
  },
  {
    name: 'bluetooth_drive',
    code: 'efe5',
  },
  {
    name: 'bluetooth_searching',
    code: 'e1aa',
  },
  {
    name: 'blur_circular',
    code: 'e3a2',
  },
  {
    name: 'blur_linear',
    code: 'e3a3',
  },
  {
    name: 'blur_off',
    code: 'e3a4',
  },
  {
    name: 'blur_on',
    code: 'e3a5',
  },
  {
    name: 'bolt',
    code: 'ea0b',
  },
  {
    name: 'book',
    code: 'e865',
  },
  {
    name: 'book_online',
    code: 'f217',
  },
  {
    name: 'bookmark',
    code: 'e866',
  },
  {
    name: 'bookmark_add',
    code: 'e598',
  },
  {
    name: 'bookmark_added',
    code: 'e599',
  },
  {
    name: 'bookmark_border',
    code: 'e867',
  },
  {
    name: 'bookmark_outline',
    code: 'e867',
  },
  {
    name: 'bookmark_remove',
    code: 'e59a',
  },
  {
    name: 'bookmarks',
    code: 'e98b',
  },
  {
    name: 'border_all',
    code: 'e228',
  },
  {
    name: 'border_bottom',
    code: 'e229',
  },
  {
    name: 'border_clear',
    code: 'e22a',
  },
  {
    name: 'border_color',
    code: 'e22b',
  },
  {
    name: 'border_horizontal',
    code: 'e22c',
  },
  {
    name: 'border_inner',
    code: 'e22d',
  },
  {
    name: 'border_left',
    code: 'e22e',
  },
  {
    name: 'border_outer',
    code: 'e22f',
  },
  {
    name: 'border_right',
    code: 'e230',
  },
  {
    name: 'border_style',
    code: 'e231',
  },
  {
    name: 'border_top',
    code: 'e232',
  },
  {
    name: 'border_vertical',
    code: 'e233',
  },
  {
    name: 'branding_watermark',
    code: 'e06b',
  },
  {
    name: 'breakfast_dining',
    code: 'ea54',
  },
  {
    name: 'brightness_1',
    code: 'e3a6',
  },
  {
    name: 'brightness_2',
    code: 'e3a7',
  },
  {
    name: 'brightness_3',
    code: 'e3a8',
  },
  {
    name: 'brightness_4',
    code: 'e3a9',
  },
  {
    name: 'brightness_5',
    code: 'e3aa',
  },
  {
    name: 'brightness_6',
    code: 'e3ab',
  },
  {
    name: 'brightness_7',
    code: 'e3ac',
  },
  {
    name: 'brightness_auto',
    code: 'e1ab',
  },
  {
    name: 'brightness_high',
    code: 'e1ac',
  },
  {
    name: 'brightness_low',
    code: 'e1ad',
  },
  {
    name: 'brightness_medium',
    code: 'e1ae',
  },
  {
    name: 'broken_image',
    code: 'e3ad',
  },
  {
    name: 'browser_not_supported',
    code: 'ef47',
  },
  {
    name: 'brunch_dining',
    code: 'ea73',
  },
  {
    name: 'brush',
    code: 'e3ae',
  },
  {
    name: 'bubble_chart',
    code: 'e6dd',
  },
  {
    name: 'bug_report',
    code: 'e868',
  },
  {
    name: 'build',
    code: 'e869',
  },
  {
    name: 'build_circle',
    code: 'ef48',
  },
  {
    name: 'bungalow',
    code: 'e591',
  },
  {
    name: 'burst_mode',
    code: 'e43c',
  },
  {
    name: 'bus_alert',
    code: 'e98f',
  },
  {
    name: 'business',
    code: 'e0af',
  },
  {
    name: 'business_center',
    code: 'eb3f',
  },
  {
    name: 'cabin',
    code: 'e589',
  },
  {
    name: 'cable',
    code: 'efe6',
  },
  {
    name: 'cached',
    code: 'e86a',
  },
  {
    name: 'cake',
    code: 'e7e9',
  },
  {
    name: 'calculate',
    code: 'ea5f',
  },
  {
    name: 'calendar_today',
    code: 'e935',
  },
  {
    name: 'calendar_view_day',
    code: 'e936',
  },
  {
    name: 'calendar_view_month',
    code: 'efe7',
  },
  {
    name: 'calendar_view_week',
    code: 'efe8',
  },
  {
    name: 'call',
    code: 'e0b0',
  },
  {
    name: 'call_end',
    code: 'e0b1',
  },
  {
    name: 'call_made',
    code: 'e0b2',
  },
  {
    name: 'call_merge',
    code: 'e0b3',
  },
  {
    name: 'call_missed',
    code: 'e0b4',
  },
  {
    name: 'call_missed_outgoing',
    code: 'e0e4',
  },
  {
    name: 'call_received',
    code: 'e0b5',
  },
  {
    name: 'call_split',
    code: 'e0b6',
  },
  {
    name: 'call_to_action',
    code: 'e06c',
  },
  {
    name: 'camera',
    code: 'e3af',
  },
  {
    name: 'camera_alt',
    code: 'e3b0',
  },
  {
    name: 'camera_enhance',
    code: 'e8fc',
  },
  {
    name: 'camera_front',
    code: 'e3b1',
  },
  {
    name: 'camera_indoor',
    code: 'efe9',
  },
  {
    name: 'camera_outdoor',
    code: 'efea',
  },
  {
    name: 'camera_rear',
    code: 'e3b2',
  },
  {
    name: 'camera_roll',
    code: 'e3b3',
  },
  {
    name: 'cameraswitch',
    code: 'efeb',
  },
  {
    name: 'campaign',
    code: 'ef49',
  },
  {
    name: 'cancel',
    code: 'e5c9',
  },
  {
    name: 'cancel_presentation',
    code: 'e0e9',
  },
  {
    name: 'cancel_schedule_send',
    code: 'ea39',
  },
  {
    name: 'car_rental',
    code: 'ea55',
  },
  {
    name: 'car_repair',
    code: 'ea56',
  },
  {
    name: 'card_giftcard',
    code: 'e8f6',
  },
  {
    name: 'card_membership',
    code: 'e8f7',
  },
  {
    name: 'card_travel',
    code: 'e8f8',
  },
  {
    name: 'carpenter',
    code: 'f1f8',
  },
  {
    name: 'cases',
    code: 'e992',
  },
  {
    name: 'casino',
    code: 'eb40',
  },
  {
    name: 'cast',
    code: 'e307',
  },
  {
    name: 'cast_connected',
    code: 'e308',
  },
  {
    name: 'cast_for_education',
    code: 'efec',
  },
  {
    name: 'catching_pokemon',
    code: 'e508',
  },
  {
    name: 'category',
    code: 'e574',
  },
  {
    name: 'celebration',
    code: 'ea65',
  },
  {
    name: 'cell_wifi',
    code: 'e0ec',
  },
  {
    name: 'center_focus_strong',
    code: 'e3b4',
  },
  {
    name: 'center_focus_weak',
    code: 'e3b5',
  },
  {
    name: 'chair',
    code: 'efed',
  },
  {
    name: 'chair_alt',
    code: 'efee',
  },
  {
    name: 'chalet',
    code: 'e585',
  },
  {
    name: 'change_circle',
    code: 'e2e7',
  },
  {
    name: 'change_history',
    code: 'e86b',
  },
  {
    name: 'charging_station',
    code: 'f19d',
  },
  {
    name: 'chat',
    code: 'e0b7',
  },
  {
    name: 'chat_bubble',
    code: 'e0ca',
  },
  {
    name: 'chat_bubble_outline',
    code: 'e0cb',
  },
  {
    name: 'check',
    code: 'e5ca',
  },
  {
    name: 'check_box',
    code: 'e834',
  },
  {
    name: 'check_box_outline_blank',
    code: 'e835',
  },
  {
    name: 'check_circle',
    code: 'e86c',
  },
  {
    name: 'check_circle_outline',
    code: 'e92d',
  },
  {
    name: 'checklist',
    code: 'e6b1',
  },
  {
    name: 'checklist_rtl',
    code: 'e6b3',
  },
  {
    name: 'checkroom',
    code: 'f19e',
  },
  {
    name: 'chevron_left',
    code: 'e5cb',
  },
  {
    name: 'chevron_right',
    code: 'e5cc',
  },
  {
    name: 'child_care',
    code: 'eb41',
  },
  {
    name: 'child_friendly',
    code: 'eb42',
  },
  {
    name: 'chrome_reader_mode',
    code: 'e86d',
  },
  {
    name: 'circle',
    code: 'ef4a',
  },
  {
    name: 'circle_notifications',
    code: 'e994',
  },
  {
    name: 'class',
    code: 'e86e',
  },
  {
    name: 'clean_hands',
    code: 'f21f',
  },
  {
    name: 'cleaning_services',
    code: 'f0ff',
  },
  {
    name: 'clear',
    code: 'e14c',
  },
  {
    name: 'clear_all',
    code: 'e0b8',
  },
  {
    name: 'close',
    code: 'e5cd',
  },
  {
    name: 'close_fullscreen',
    code: 'f1cf',
  },
  {
    name: 'closed_caption',
    code: 'e01c',
  },
  {
    name: 'closed_caption_disabled',
    code: 'f1dc',
  },
  {
    name: 'closed_caption_off',
    code: 'e996',
  },
  {
    name: 'cloud',
    code: 'e2bd',
  },
  {
    name: 'cloud_circle',
    code: 'e2be',
  },
  {
    name: 'cloud_done',
    code: 'e2bf',
  },
  {
    name: 'cloud_download',
    code: 'e2c0',
  },
  {
    name: 'cloud_off',
    code: 'e2c1',
  },
  {
    name: 'cloud_queue',
    code: 'e2c2',
  },
  {
    name: 'cloud_upload',
    code: 'e2c3',
  },
  {
    name: 'code',
    code: 'e86f',
  },
  {
    name: 'code_off',
    code: 'e4f3',
  },
  {
    name: 'coffee',
    code: 'efef',
  },
  {
    name: 'coffee_maker',
    code: 'eff0',
  },
  {
    name: 'collections',
    code: 'e3b6',
  },
  {
    name: 'collections_bookmark',
    code: 'e431',
  },
  {
    name: 'color_lens',
    code: 'e3b7',
  },
  {
    name: 'colorize',
    code: 'e3b8',
  },
  {
    name: 'comment',
    code: 'e0b9',
  },
  {
    name: 'comment_bank',
    code: 'ea4e',
  },
  {
    name: 'commute',
    code: 'e940',
  },
  {
    name: 'compare',
    code: 'e3b9',
  },
  {
    name: 'compare_arrows',
    code: 'e915',
  },
  {
    name: 'compass_calibration',
    code: 'e57c',
  },
  {
    name: 'compost',
    code: 'e761',
  },
  {
    name: 'compress',
    code: 'e94d',
  },
  {
    name: 'computer',
    code: 'e30a',
  },
  {
    name: 'confirmation_num',
    code: 'e638',
  },
  {
    name: 'confirmation_number',
    code: 'e638',
  },
  {
    name: 'connect_without_contact',
    code: 'f223',
  },
  {
    name: 'connected_tv',
    code: 'e998',
  },
  {
    name: 'construction',
    code: 'ea3c',
  },
  {
    name: 'contact_mail',
    code: 'e0d0',
  },
  {
    name: 'contact_page',
    code: 'f22e',
  },
  {
    name: 'contact_phone',
    code: 'e0cf',
  },
  {
    name: 'contact_support',
    code: 'e94c',
  },
  {
    name: 'contactless',
    code: 'ea71',
  },
  {
    name: 'contacts',
    code: 'e0ba',
  },
  {
    name: 'content_copy',
    code: 'e14d',
  },
  {
    name: 'content_cut',
    code: 'e14e',
  },
  {
    name: 'content_paste',
    code: 'e14f',
  },
  {
    name: 'content_paste_off',
    code: 'e4f8',
  },
  {
    name: 'control_camera',
    code: 'e074',
  },
  {
    name: 'control_point',
    code: 'e3ba',
  },
  {
    name: 'control_point_duplicate',
    code: 'e3bb',
  },
  {
    name: 'copy_all',
    code: 'e2ec',
  },
  {
    name: 'copyright',
    code: 'e90c',
  },
  {
    name: 'coronavirus',
    code: 'f221',
  },
  {
    name: 'corporate_fare',
    code: 'f1d0',
  },
  {
    name: 'cottage',
    code: 'e587',
  },
  {
    name: 'countertops',
    code: 'f1f7',
  },
  {
    name: 'create',
    code: 'e150',
  },
  {
    name: 'create_new_folder',
    code: 'e2cc',
  },
  {
    name: 'credit_card',
    code: 'e870',
  },
  {
    name: 'credit_card_off',
    code: 'e4f4',
  },
  {
    name: 'credit_score',
    code: 'eff1',
  },
  {
    name: 'crib',
    code: 'e588',
  },
  {
    name: 'crop',
    code: 'e3be',
  },
  {
    name: 'crop_16_9',
    code: 'e3bc',
  },
  {
    name: 'crop_3_2',
    code: 'e3bd',
  },
  {
    name: 'crop_5_4',
    code: 'e3bf',
  },
  {
    name: 'crop_7_5',
    code: 'e3c0',
  },
  {
    name: 'crop_din',
    code: 'e3c1',
  },
  {
    name: 'crop_free',
    code: 'e3c2',
  },
  {
    name: 'crop_landscape',
    code: 'e3c3',
  },
  {
    name: 'crop_original',
    code: 'e3c4',
  },
  {
    name: 'crop_portrait',
    code: 'e3c5',
  },
  {
    name: 'crop_rotate',
    code: 'e437',
  },
  {
    name: 'crop_square',
    code: 'e3c6',
  },
  {
    name: 'cruelty_free',
    code: 'e799',
  },
  {
    name: 'dangerous',
    code: 'e99a',
  },
  {
    name: 'dark_mode',
    code: 'e51c',
  },
  {
    name: 'dashboard',
    code: 'e871',
  },
  {
    name: 'dashboard_customize',
    code: 'e99b',
  },
  {
    name: 'data_exploration',
    code: 'e76f',
  },
  {
    name: 'data_saver_off',
    code: 'eff2',
  },
  {
    name: 'data_saver_on',
    code: 'eff3',
  },
  {
    name: 'data_usage',
    code: 'e1af',
  },
  {
    name: 'date_range',
    code: 'e916',
  },
  {
    name: 'deck',
    code: 'ea42',
  },
  {
    name: 'dehaze',
    code: 'e3c7',
  },
  {
    name: 'delete',
    code: 'e872',
  },
  {
    name: 'delete_forever',
    code: 'e92b',
  },
  {
    name: 'delete_outline',
    code: 'e92e',
  },
  {
    name: 'delete_sweep',
    code: 'e16c',
  },
  {
    name: 'delivery_dining',
    code: 'ea72',
  },
  {
    name: 'departure_board',
    code: 'e576',
  },
  {
    name: 'description',
    code: 'e873',
  },
  {
    name: 'design_services',
    code: 'f10a',
  },
  {
    name: 'desktop_access_disabled',
    code: 'e99d',
  },
  {
    name: 'desktop_mac',
    code: 'e30b',
  },
  {
    name: 'desktop_windows',
    code: 'e30c',
  },
  {
    name: 'details',
    code: 'e3c8',
  },
  {
    name: 'developer_board',
    code: 'e30d',
  },
  {
    name: 'developer_board_off',
    code: 'e4ff',
  },
  {
    name: 'developer_mode',
    code: 'e1b0',
  },
  {
    name: 'device_hub',
    code: 'e335',
  },
  {
    name: 'device_thermostat',
    code: 'e1ff',
  },
  {
    name: 'device_unknown',
    code: 'e339',
  },
  {
    name: 'devices',
    code: 'e1b1',
  },
  {
    name: 'devices_other',
    code: 'e337',
  },
  {
    name: 'dialer_sip',
    code: 'e0bb',
  },
  {
    name: 'dialpad',
    code: 'e0bc',
  },
  {
    name: 'dining',
    code: 'eff4',
  },
  {
    name: 'dinner_dining',
    code: 'ea57',
  },
  {
    name: 'directions',
    code: 'e52e',
  },
  {
    name: 'directions_bike',
    code: 'e52f',
  },
  {
    name: 'directions_boat',
    code: 'e532',
  },
  {
    name: 'directions_boat_filled',
    code: 'eff5',
  },
  {
    name: 'directions_bus',
    code: 'e530',
  },
  {
    name: 'directions_bus_filled',
    code: 'eff6',
  },
  {
    name: 'directions_car',
    code: 'e531',
  },
  {
    name: 'directions_car_filled',
    code: 'eff7',
  },
  {
    name: 'directions_ferry',
    code: 'e532',
  },
  {
    name: 'directions_off',
    code: 'f10f',
  },
  {
    name: 'directions_railway',
    code: 'e534',
  },
  {
    name: 'directions_railway_filled',
    code: 'eff8',
  },
  {
    name: 'directions_run',
    code: 'e566',
  },
  {
    name: 'directions_subway',
    code: 'e533',
  },
  {
    name: 'directions_subway_filled',
    code: 'eff9',
  },
  {
    name: 'directions_train',
    code: 'e534',
  },
  {
    name: 'directions_transit',
    code: 'e535',
  },
  {
    name: 'directions_transit_filled',
    code: 'effa',
  },
  {
    name: 'directions_walk',
    code: 'e536',
  },
  {
    name: 'dirty_lens',
    code: 'ef4b',
  },
  {
    name: 'disabled_by_default',
    code: 'f230',
  },
  {
    name: 'disabled_visible',
    code: 'e76e',
  },
  {
    name: 'disc_full',
    code: 'e610',
  },
  {
    name: 'dnd_forwardslash',
    code: 'e611',
  },
  {
    name: 'dns',
    code: 'e875',
  },
  {
    name: 'do_disturb',
    code: 'f08c',
  },
  {
    name: 'do_disturb_alt',
    code: 'f08d',
  },
  {
    name: 'do_disturb_off',
    code: 'f08e',
  },
  {
    name: 'do_disturb_on',
    code: 'f08f',
  },
  {
    name: 'do_not_disturb',
    code: 'e612',
  },
  {
    name: 'do_not_disturb_alt',
    code: 'e611',
  },
  {
    name: 'do_not_disturb_off',
    code: 'e643',
  },
  {
    name: 'do_not_disturb_on',
    code: 'e644',
  },
  {
    name: 'do_not_disturb_on_total_silence',
    code: 'effb',
  },
  {
    name: 'do_not_step',
    code: 'f19f',
  },
  {
    name: 'do_not_touch',
    code: 'f1b0',
  },
  {
    name: 'dock',
    code: 'e30e',
  },
  {
    name: 'document_scanner',
    code: 'e5fa',
  },
  {
    name: 'domain',
    code: 'e7ee',
  },
  {
    name: 'domain_disabled',
    code: 'e0ef',
  },
  {
    name: 'domain_verification',
    code: 'ef4c',
  },
  {
    name: 'done',
    code: 'e876',
  },
  {
    name: 'done_all',
    code: 'e877',
  },
  {
    name: 'done_outline',
    code: 'e92f',
  },
  {
    name: 'donut_large',
    code: 'e917',
  },
  {
    name: 'donut_small',
    code: 'e918',
  },
  {
    name: 'door_back',
    code: 'effc',
  },
  {
    name: 'door_front',
    code: 'effd',
  },
  {
    name: 'door_sliding',
    code: 'effe',
  },
  {
    name: 'doorbell',
    code: 'efff',
  },
  {
    name: 'double_arrow',
    code: 'ea50',
  },
  {
    name: 'downhill_skiing',
    code: 'e509',
  },
  {
    name: 'download',
    code: 'f090',
  },
  {
    name: 'download_done',
    code: 'f091',
  },
  {
    name: 'download_for_offline',
    code: 'f000',
  },
  {
    name: 'downloading',
    code: 'f001',
  },
  {
    name: 'drafts',
    code: 'e151',
  },
  {
    name: 'drag_handle',
    code: 'e25d',
  },
  {
    name: 'drag_indicator',
    code: 'e945',
  },
  {
    name: 'draw',
    code: 'e746',
  },
  {
    name: 'drive_eta',
    code: 'e613',
  },
  {
    name: 'drive_file_move',
    code: 'e675',
  },
  {
    name: 'drive_file_move_outline',
    code: 'e9a1',
  },
  {
    name: 'drive_file_move_rtl',
    code: 'e76d',
  },
  {
    name: 'drive_file_rename_outline',
    code: 'e9a2',
  },
  {
    name: 'drive_folder_upload',
    code: 'e9a3',
  },
  {
    name: 'dry',
    code: 'f1b3',
  },
  {
    name: 'dry_cleaning',
    code: 'ea58',
  },
  {
    name: 'duo',
    code: 'e9a5',
  },
  {
    name: 'dvr',
    code: 'e1b2',
  },
  {
    name: 'dynamic_feed',
    code: 'ea14',
  },
  {
    name: 'dynamic_form',
    code: 'f1bf',
  },
  {
    name: 'e_mobiledata',
    code: 'f002',
  },
  {
    name: 'earbuds',
    code: 'f003',
  },
  {
    name: 'earbuds_battery',
    code: 'f004',
  },
  {
    name: 'east',
    code: 'f1df',
  },
  {
    name: 'eco',
    code: 'ea35',
  },
  {
    name: 'edgesensor_high',
    code: 'f005',
  },
  {
    name: 'edgesensor_low',
    code: 'f006',
  },
  {
    name: 'edit',
    code: 'e3c9',
  },
  {
    name: 'edit_attributes',
    code: 'e578',
  },
  {
    name: 'edit_calendar',
    code: 'e742',
  },
  {
    name: 'edit_location',
    code: 'e568',
  },
  {
    name: 'edit_location_alt',
    code: 'e1c5',
  },
  {
    name: 'edit_note',
    code: 'e745',
  },
  {
    name: 'edit_notifications',
    code: 'e525',
  },
  {
    name: 'edit_off',
    code: 'e950',
  },
  {
    name: 'edit_road',
    code: 'ef4d',
  },
  {
    name: 'eject',
    code: 'e8fb',
  },
  {
    name: 'elderly',
    code: 'f21a',
  },
  {
    name: 'electric_bike',
    code: 'eb1b',
  },
  {
    name: 'electric_car',
    code: 'eb1c',
  },
  {
    name: 'electric_moped',
    code: 'eb1d',
  },
  {
    name: 'electric_rickshaw',
    code: 'eb1e',
  },
  {
    name: 'electric_scooter',
    code: 'eb1f',
  },
  {
    name: 'electrical_services',
    code: 'f102',
  },
  {
    name: 'elevator',
    code: 'f1a0',
  },
  {
    name: 'email',
    code: 'e0be',
  },
  {
    name: 'emergency',
    code: 'e1eb',
  },
  {
    name: 'emoji_emotions',
    code: 'ea22',
  },
  {
    name: 'emoji_events',
    code: 'ea23',
  },
  {
    name: 'emoji_flags',
    code: 'ea1a',
  },
  {
    name: 'emoji_food_beverage',
    code: 'ea1b',
  },
  {
    name: 'emoji_nature',
    code: 'ea1c',
  },
  {
    name: 'emoji_objects',
    code: 'ea24',
  },
  {
    name: 'emoji_people',
    code: 'ea1d',
  },
  {
    name: 'emoji_symbols',
    code: 'ea1e',
  },
  {
    name: 'emoji_transportation',
    code: 'ea1f',
  },
  {
    name: 'engineering',
    code: 'ea3d',
  },
  {
    name: 'enhance_photo_translate',
    code: 'e8fc',
  },
  {
    name: 'enhanced_encryption',
    code: 'e63f',
  },
  {
    name: 'equalizer',
    code: 'e01d',
  },
  {
    name: 'error',
    code: 'e000',
  },
  {
    name: 'error_outline',
    code: 'e001',
  },
  {
    name: 'escalator',
    code: 'f1a1',
  },
  {
    name: 'escalator_warning',
    code: 'f1ac',
  },
  {
    name: 'euro',
    code: 'ea15',
  },
  {
    name: 'euro_symbol',
    code: 'e926',
  },
  {
    name: 'ev_station',
    code: 'e56d',
  },
  {
    name: 'event',
    code: 'e878',
  },
  {
    name: 'event_available',
    code: 'e614',
  },
  {
    name: 'event_busy',
    code: 'e615',
  },
  {
    name: 'event_note',
    code: 'e616',
  },
  {
    name: 'event_seat',
    code: 'e903',
  },
  {
    name: 'exit_to_app',
    code: 'e879',
  },
  {
    name: 'expand',
    code: 'e94f',
  },
  {
    name: 'expand_less',
    code: 'e5ce',
  },
  {
    name: 'expand_more',
    code: 'e5cf',
  },
  {
    name: 'explicit',
    code: 'e01e',
  },
  {
    name: 'explore',
    code: 'e87a',
  },
  {
    name: 'explore_off',
    code: 'e9a8',
  },
  {
    name: 'exposure',
    code: 'e3ca',
  },
  {
    name: 'exposure_minus_1',
    code: 'e3cb',
  },
  {
    name: 'exposure_minus_2',
    code: 'e3cc',
  },
  {
    name: 'exposure_neg_1',
    code: 'e3cb',
  },
  {
    name: 'exposure_neg_2',
    code: 'e3cc',
  },
  {
    name: 'exposure_plus_1',
    code: 'e3cd',
  },
  {
    name: 'exposure_plus_2',
    code: 'e3ce',
  },
  {
    name: 'exposure_zero',
    code: 'e3cf',
  },
  {
    name: 'extension',
    code: 'e87b',
  },
  {
    name: 'extension_off',
    code: 'e4f5',
  },
  {
    name: 'face',
    code: 'e87c',
  },
  {
    name: 'face_retouching_natural',
    code: 'ef4e',
  },
  {
    name: 'face_retouching_off',
    code: 'f007',
  },
  {
    name: 'facebook',
    code: 'f234',
  },
  {
    name: 'fact_check',
    code: 'f0c5',
  },
  {
    name: 'family_restroom',
    code: 'f1a2',
  },
  {
    name: 'fast_forward',
    code: 'e01f',
  },
  {
    name: 'fast_rewind',
    code: 'e020',
  },
  {
    name: 'fastfood',
    code: 'e57a',
  },
  {
    name: 'favorite',
    code: 'e87d',
  },
  {
    name: 'favorite_border',
    code: 'e87e',
  },
  {
    name: 'favorite_outline',
    code: 'e87e',
  },
  {
    name: 'featured_play_list',
    code: 'e06d',
  },
  {
    name: 'featured_video',
    code: 'e06e',
  },
  {
    name: 'feed',
    code: 'f009',
  },
  {
    name: 'feedback',
    code: 'e87f',
  },
  {
    name: 'female',
    code: 'e590',
  },
  {
    name: 'fence',
    code: 'f1f6',
  },
  {
    name: 'festival',
    code: 'ea68',
  },
  {
    name: 'fiber_dvr',
    code: 'e05d',
  },
  {
    name: 'fiber_manual_record',
    code: 'e061',
  },
  {
    name: 'fiber_new',
    code: 'e05e',
  },
  {
    name: 'fiber_pin',
    code: 'e06a',
  },
  {
    name: 'fiber_smart_record',
    code: 'e062',
  },
  {
    name: 'file_copy',
    code: 'e173',
  },
  {
    name: 'file_download',
    code: 'e2c4',
  },
  {
    name: 'file_download_done',
    code: 'e9aa',
  },
  {
    name: 'file_download_off',
    code: 'e4fe',
  },
  {
    name: 'file_present',
    code: 'ea0e',
  },
  {
    name: 'file_upload',
    code: 'e2c6',
  },
  {
    name: 'filter',
    code: 'e3d3',
  },
  {
    name: 'filter_1',
    code: 'e3d0',
  },
  {
    name: 'filter_2',
    code: 'e3d1',
  },
  {
    name: 'filter_3',
    code: 'e3d2',
  },
  {
    name: 'filter_4',
    code: 'e3d4',
  },
  {
    name: 'filter_5',
    code: 'e3d5',
  },
  {
    name: 'filter_6',
    code: 'e3d6',
  },
  {
    name: 'filter_7',
    code: 'e3d7',
  },
  {
    name: 'filter_8',
    code: 'e3d8',
  },
  {
    name: 'filter_9',
    code: 'e3d9',
  },
  {
    name: 'filter_9_plus',
    code: 'e3da',
  },
  {
    name: 'filter_alt',
    code: 'ef4f',
  },
  {
    name: 'filter_b_and_w',
    code: 'e3db',
  },
  {
    name: 'filter_center_focus',
    code: 'e3dc',
  },
  {
    name: 'filter_drama',
    code: 'e3dd',
  },
  {
    name: 'filter_frames',
    code: 'e3de',
  },
  {
    name: 'filter_hdr',
    code: 'e3df',
  },
  {
    name: 'filter_list',
    code: 'e152',
  },
  {
    name: 'filter_list_alt',
    code: 'e94e',
  },
  {
    name: 'filter_none',
    code: 'e3e0',
  },
  {
    name: 'filter_tilt_shift',
    code: 'e3e2',
  },
  {
    name: 'filter_vintage',
    code: 'e3e3',
  },
  {
    name: 'find_in_page',
    code: 'e880',
  },
  {
    name: 'find_replace',
    code: 'e881',
  },
  {
    name: 'fingerprint',
    code: 'e90d',
  },
  {
    name: 'fire_extinguisher',
    code: 'f1d8',
  },
  {
    name: 'fire_hydrant',
    code: 'f1a3',
  },
  {
    name: 'fireplace',
    code: 'ea43',
  },
  {
    name: 'first_page',
    code: 'e5dc',
  },
  {
    name: 'fit_screen',
    code: 'ea10',
  },
  {
    name: 'fitness_center',
    code: 'eb43',
  },
  {
    name: 'flag',
    code: 'e153',
  },
  {
    name: 'flaky',
    code: 'ef50',
  },
  {
    name: 'flare',
    code: 'e3e4',
  },
  {
    name: 'flash_auto',
    code: 'e3e5',
  },
  {
    name: 'flash_off',
    code: 'e3e6',
  },
  {
    name: 'flash_on',
    code: 'e3e7',
  },
  {
    name: 'flashlight_off',
    code: 'f00a',
  },
  {
    name: 'flashlight_on',
    code: 'f00b',
  },
  {
    name: 'flatware',
    code: 'f00c',
  },
  {
    name: 'flight',
    code: 'e539',
  },
  {
    name: 'flight_land',
    code: 'e904',
  },
  {
    name: 'flight_takeoff',
    code: 'e905',
  },
  {
    name: 'flip',
    code: 'e3e8',
  },
  {
    name: 'flip_camera_android',
    code: 'ea37',
  },
  {
    name: 'flip_camera_ios',
    code: 'ea38',
  },
  {
    name: 'flip_to_back',
    code: 'e882',
  },
  {
    name: 'flip_to_front',
    code: 'e883',
  },
  {
    name: 'flourescent',
    code: 'f00d',
  },
  {
    name: 'flutter_dash',
    code: 'e00b',
  },
  {
    name: 'fmd_bad',
    code: 'f00e',
  },
  {
    name: 'fmd_good',
    code: 'f00f',
  },
  {
    name: 'folder',
    code: 'e2c7',
  },
  {
    name: 'folder_open',
    code: 'e2c8',
  },
  {
    name: 'folder_shared',
    code: 'e2c9',
  },
  {
    name: 'folder_special',
    code: 'e617',
  },
  {
    name: 'follow_the_signs',
    code: 'f222',
  },
  {
    name: 'font_download',
    code: 'e167',
  },
  {
    name: 'font_download_off',
    code: 'e4f9',
  },
  {
    name: 'food_bank',
    code: 'f1f2',
  },
  {
    name: 'format_align_center',
    code: 'e234',
  },
  {
    name: 'format_align_justify',
    code: 'e235',
  },
  {
    name: 'format_align_left',
    code: 'e236',
  },
  {
    name: 'format_align_right',
    code: 'e237',
  },
  {
    name: 'format_bold',
    code: 'e238',
  },
  {
    name: 'format_clear',
    code: 'e239',
  },
  {
    name: 'format_color_fill',
    code: 'e23a',
  },
  {
    name: 'format_color_reset',
    code: 'e23b',
  },
  {
    name: 'format_color_text',
    code: 'e23c',
  },
  {
    name: 'format_indent_decrease',
    code: 'e23d',
  },
  {
    name: 'format_indent_increase',
    code: 'e23e',
  },
  {
    name: 'format_italic',
    code: 'e23f',
  },
  {
    name: 'format_line_spacing',
    code: 'e240',
  },
  {
    name: 'format_list_bulleted',
    code: 'e241',
  },
  {
    name: 'format_list_numbered',
    code: 'e242',
  },
  {
    name: 'format_list_numbered_rtl',
    code: 'e267',
  },
  {
    name: 'format_paint',
    code: 'e243',
  },
  {
    name: 'format_quote',
    code: 'e244',
  },
  {
    name: 'format_shapes',
    code: 'e25e',
  },
  {
    name: 'format_size',
    code: 'e245',
  },
  {
    name: 'format_strikethrough',
    code: 'e246',
  },
  {
    name: 'format_textdirection_l_to_r',
    code: 'e247',
  },
  {
    name: 'format_textdirection_r_to_l',
    code: 'e248',
  },
  {
    name: 'format_underline',
    code: 'e249',
  },
  {
    name: 'format_underlined',
    code: 'e249',
  },
  {
    name: 'forum',
    code: 'e0bf',
  },
  {
    name: 'forward',
    code: 'e154',
  },
  {
    name: 'forward_10',
    code: 'e056',
  },
  {
    name: 'forward_30',
    code: 'e057',
  },
  {
    name: 'forward_5',
    code: 'e058',
  },
  {
    name: 'forward_to_inbox',
    code: 'f187',
  },
  {
    name: 'foundation',
    code: 'f200',
  },
  {
    name: 'free_breakfast',
    code: 'eb44',
  },
  {
    name: 'free_cancellation',
    code: 'e748',
  },
  {
    name: 'front_hand',
    code: 'e769',
  },
  {
    name: 'fullscreen',
    code: 'e5d0',
  },
  {
    name: 'fullscreen_exit',
    code: 'e5d1',
  },
  {
    name: 'functions',
    code: 'e24a',
  },
  {
    name: 'g_mobiledata',
    code: 'f010',
  },
  {
    name: 'g_translate',
    code: 'e927',
  },
  {
    name: 'gamepad',
    code: 'e30f',
  },
  {
    name: 'games',
    code: 'e021',
  },
  {
    name: 'garage',
    code: 'f011',
  },
  {
    name: 'gavel',
    code: 'e90e',
  },
  {
    name: 'generating_tokens',
    code: 'e749',
  },
  {
    name: 'gesture',
    code: 'e155',
  },
  {
    name: 'get_app',
    code: 'e884',
  },
  {
    name: 'gif',
    code: 'e908',
  },
  {
    name: 'gite',
    code: 'e58b',
  },
  {
    name: 'goat',
    code: '10fffd',
  },
  {
    name: 'golf_course',
    code: 'eb45',
  },
  {
    name: 'gpp_bad',
    code: 'f012',
  },
  {
    name: 'gpp_good',
    code: 'f013',
  },
  {
    name: 'gpp_maybe',
    code: 'f014',
  },
  {
    name: 'gps_fixed',
    code: 'e1b3',
  },
  {
    name: 'gps_not_fixed',
    code: 'e1b4',
  },
  {
    name: 'gps_off',
    code: 'e1b5',
  },
  {
    name: 'grade',
    code: 'e885',
  },
  {
    name: 'gradient',
    code: 'e3e9',
  },
  {
    name: 'grading',
    code: 'ea4f',
  },
  {
    name: 'grain',
    code: 'e3ea',
  },
  {
    name: 'graphic_eq',
    code: 'e1b8',
  },
  {
    name: 'grass',
    code: 'f205',
  },
  {
    name: 'grid_3x3',
    code: 'f015',
  },
  {
    name: 'grid_4x4',
    code: 'f016',
  },
  {
    name: 'grid_goldenratio',
    code: 'f017',
  },
  {
    name: 'grid_off',
    code: 'e3eb',
  },
  {
    name: 'grid_on',
    code: 'e3ec',
  },
  {
    name: 'grid_view',
    code: 'e9b0',
  },
  {
    name: 'group',
    code: 'e7ef',
  },
  {
    name: 'group_add',
    code: 'e7f0',
  },
  {
    name: 'group_off',
    code: 'e747',
  },
  {
    name: 'group_work',
    code: 'e886',
  },
  {
    name: 'groups',
    code: 'f233',
  },
  {
    name: 'h_mobiledata',
    code: 'f018',
  },
  {
    name: 'h_plus_mobiledata',
    code: 'f019',
  },
  {
    name: 'hail',
    code: 'e9b1',
  },
  {
    name: 'handyman',
    code: 'f10b',
  },
  {
    name: 'hardware',
    code: 'ea59',
  },
  {
    name: 'hd',
    code: 'e052',
  },
  {
    name: 'hdr_auto',
    code: 'f01a',
  },
  {
    name: 'hdr_auto_select',
    code: 'f01b',
  },
  {
    name: 'hdr_enhanced_select',
    code: 'ef51',
  },
  {
    name: 'hdr_off',
    code: 'e3ed',
  },
  {
    name: 'hdr_off_select',
    code: 'f01c',
  },
  {
    name: 'hdr_on',
    code: 'e3ee',
  },
  {
    name: 'hdr_on_select',
    code: 'f01d',
  },
  {
    name: 'hdr_plus',
    code: 'f01e',
  },
  {
    name: 'hdr_strong',
    code: 'e3f1',
  },
  {
    name: 'hdr_weak',
    code: 'e3f2',
  },
  {
    name: 'headphones',
    code: 'f01f',
  },
  {
    name: 'headphones_battery',
    code: 'f020',
  },
  {
    name: 'headset',
    code: 'e310',
  },
  {
    name: 'headset_mic',
    code: 'e311',
  },
  {
    name: 'headset_off',
    code: 'e33a',
  },
  {
    name: 'healing',
    code: 'e3f3',
  },
  {
    name: 'health_and_safety',
    code: 'e1d5',
  },
  {
    name: 'hearing',
    code: 'e023',
  },
  {
    name: 'hearing_disabled',
    code: 'f104',
  },
  {
    name: 'height',
    code: 'ea16',
  },
  {
    name: 'help',
    code: 'e887',
  },
  {
    name: 'help_center',
    code: 'f1c0',
  },
  {
    name: 'help_outline',
    code: 'e8fd',
  },
  {
    name: 'hevc',
    code: 'f021',
  },
  {
    name: 'hide_image',
    code: 'f022',
  },
  {
    name: 'hide_source',
    code: 'f023',
  },
  {
    name: 'high_quality',
    code: 'e024',
  },
  {
    name: 'highlight',
    code: 'e25f',
  },
  {
    name: 'highlight_alt',
    code: 'ef52',
  },
  {
    name: 'highlight_off',
    code: 'e888',
  },
  {
    name: 'highlight_remove',
    code: 'e888',
  },
  {
    name: 'hiking',
    code: 'e50a',
  },
  {
    name: 'history',
    code: 'e889',
  },
  {
    name: 'history_edu',
    code: 'ea3e',
  },
  {
    name: 'history_toggle_off',
    code: 'f17d',
  },
  {
    name: 'holiday_village',
    code: 'e58a',
  },
  {
    name: 'home',
    code: 'e88a',
  },
  {
    name: 'home_filled',
    code: 'e9b2',
  },
  {
    name: 'home_max',
    code: 'f024',
  },
  {
    name: 'home_mini',
    code: 'f025',
  },
  {
    name: 'home_repair_service',
    code: 'f100',
  },
  {
    name: 'home_work',
    code: 'ea09',
  },
  {
    name: 'horizontal_distribute',
    code: 'e014',
  },
  {
    name: 'horizontal_rule',
    code: 'f108',
  },
  {
    name: 'horizontal_split',
    code: 'e947',
  },
  {
    name: 'hot_tub',
    code: 'eb46',
  },
  {
    name: 'hotel',
    code: 'e53a',
  },
  {
    name: 'hotel_class',
    code: 'e743',
  },
  {
    name: 'hourglass_bottom',
    code: 'ea5c',
  },
  {
    name: 'hourglass_disabled',
    code: 'ef53',
  },
  {
    name: 'hourglass_empty',
    code: 'e88b',
  },
  {
    name: 'hourglass_full',
    code: 'e88c',
  },
  {
    name: 'hourglass_top',
    code: 'ea5b',
  },
  {
    name: 'house',
    code: 'ea44',
  },
  {
    name: 'house_siding',
    code: 'f202',
  },
  {
    name: 'houseboat',
    code: 'e584',
  },
  {
    name: 'how_to_reg',
    code: 'e174',
  },
  {
    name: 'how_to_vote',
    code: 'e175',
  },
  {
    name: 'http',
    code: 'e902',
  },
  {
    name: 'https',
    code: 'e88d',
  },
  {
    name: 'hvac',
    code: 'f10e',
  },
  {
    name: 'ice_skating',
    code: 'e50b',
  },
  {
    name: 'icecream',
    code: 'ea69',
  },
  {
    name: 'image',
    code: 'e3f4',
  },
  {
    name: 'image_aspect_ratio',
    code: 'e3f5',
  },
  {
    name: 'image_not_supported',
    code: 'f116',
  },
  {
    name: 'image_search',
    code: 'e43f',
  },
  {
    name: 'imagesearch_roller',
    code: 'e9b4',
  },
  {
    name: 'import_contacts',
    code: 'e0e0',
  },
  {
    name: 'import_export',
    code: 'e0c3',
  },
  {
    name: 'important_devices',
    code: 'e912',
  },
  {
    name: 'inbox',
    code: 'e156',
  },
  {
    name: 'incomplete_circle',
    code: 'e79b',
  },
  {
    name: 'indeterminate_check_box',
    code: 'e909',
  },
  {
    name: 'info',
    code: 'e88e',
  },
  {
    name: 'info_outline',
    code: 'e88f',
  },
  {
    name: 'input',
    code: 'e890',
  },
  {
    name: 'insert_chart',
    code: 'e24b',
  },
  {
    name: 'insert_chart_outlined',
    code: 'e26a',
  },
  {
    name: 'insert_comment',
    code: 'e24c',
  },
  {
    name: 'insert_drive_file',
    code: 'e24d',
  },
  {
    name: 'insert_emoticon',
    code: 'e24e',
  },
  {
    name: 'insert_invitation',
    code: 'e24f',
  },
  {
    name: 'insert_link',
    code: 'e250',
  },
  {
    name: 'insert_photo',
    code: 'e251',
  },
  {
    name: 'insights',
    code: 'f092',
  },
  {
    name: 'integration_instructions',
    code: 'ef54',
  },
  {
    name: 'inventory',
    code: 'e179',
  },
  {
    name: 'inventory_2',
    code: 'e1a1',
  },
  {
    name: 'invert_colors',
    code: 'e891',
  },
  {
    name: 'invert_colors_off',
    code: 'e0c4',
  },
  {
    name: 'invert_colors_on',
    code: 'e891',
  },
  {
    name: 'ios_share',
    code: 'e6b8',
  },
  {
    name: 'iron',
    code: 'e583',
  },
  {
    name: 'iso',
    code: 'e3f6',
  },
  {
    name: 'kayaking',
    code: 'e50c',
  },
  {
    name: 'keyboard',
    code: 'e312',
  },
  {
    name: 'keyboard_alt',
    code: 'f028',
  },
  {
    name: 'keyboard_arrow_down',
    code: 'e313',
  },
  {
    name: 'keyboard_arrow_left',
    code: 'e314',
  },
  {
    name: 'keyboard_arrow_right',
    code: 'e315',
  },
  {
    name: 'keyboard_arrow_up',
    code: 'e316',
  },
  {
    name: 'keyboard_backspace',
    code: 'e317',
  },
  {
    name: 'keyboard_capslock',
    code: 'e318',
  },
  {
    name: 'keyboard_control',
    code: 'e5d3',
  },
  {
    name: 'keyboard_hide',
    code: 'e31a',
  },
  {
    name: 'keyboard_return',
    code: 'e31b',
  },
  {
    name: 'keyboard_tab',
    code: 'e31c',
  },
  {
    name: 'keyboard_voice',
    code: 'e31d',
  },
  {
    name: 'king_bed',
    code: 'ea45',
  },
  {
    name: 'kitchen',
    code: 'eb47',
  },
  {
    name: 'kitesurfing',
    code: 'e50d',
  },
  {
    name: 'label',
    code: 'e892',
  },
  {
    name: 'label_important',
    code: 'e937',
  },
  {
    name: 'label_important_outline',
    code: 'e948',
  },
  {
    name: 'label_off',
    code: 'e9b6',
  },
  {
    name: 'label_outline',
    code: 'e893',
  },
  {
    name: 'landscape',
    code: 'e3f7',
  },
  {
    name: 'language',
    code: 'e894',
  },
  {
    name: 'laptop',
    code: 'e31e',
  },
  {
    name: 'laptop_chromebook',
    code: 'e31f',
  },
  {
    name: 'laptop_mac',
    code: 'e320',
  },
  {
    name: 'laptop_windows',
    code: 'e321',
  },
  {
    name: 'last_page',
    code: 'e5dd',
  },
  {
    name: 'launch',
    code: 'e895',
  },
  {
    name: 'layers',
    code: 'e53b',
  },
  {
    name: 'layers_clear',
    code: 'e53c',
  },
  {
    name: 'leaderboard',
    code: 'f20c',
  },
  {
    name: 'leak_add',
    code: 'e3f8',
  },
  {
    name: 'leak_remove',
    code: 'e3f9',
  },
  {
    name: 'leave_bags_at_home',
    code: 'f21b',
  },
  {
    name: 'legend_toggle',
    code: 'f11b',
  },
  {
    name: 'lens',
    code: 'e3fa',
  },
  {
    name: 'lens_blur',
    code: 'f029',
  },
  {
    name: 'library_add',
    code: 'e02e',
  },
  {
    name: 'library_add_check',
    code: 'e9b7',
  },
  {
    name: 'library_books',
    code: 'e02f',
  },
  {
    name: 'library_music',
    code: 'e030',
  },
  {
    name: 'light',
    code: 'f02a',
  },
  {
    name: 'light_mode',
    code: 'e518',
  },
  {
    name: 'lightbulb',
    code: 'e0f0',
  },
  {
    name: 'lightbulb_outline',
    code: 'e90f',
  },
  {
    name: 'line_style',
    code: 'e919',
  },
  {
    name: 'line_weight',
    code: 'e91a',
  },
  {
    name: 'linear_scale',
    code: 'e260',
  },
  {
    name: 'link',
    code: 'e157',
  },
  {
    name: 'link_off',
    code: 'e16f',
  },
  {
    name: 'linked_camera',
    code: 'e438',
  },
  {
    name: 'liquor',
    code: 'ea60',
  },
  {
    name: 'list',
    code: 'e896',
  },
  {
    name: 'list_alt',
    code: 'e0ee',
  },
  {
    name: 'live_help',
    code: 'e0c6',
  },
  {
    name: 'live_tv',
    code: 'e639',
  },
  {
    name: 'living',
    code: 'f02b',
  },
  {
    name: 'local_activity',
    code: 'e53f',
  },
  {
    name: 'local_airport',
    code: 'e53d',
  },
  {
    name: 'local_atm',
    code: 'e53e',
  },
  {
    name: 'local_attraction',
    code: 'e53f',
  },
  {
    name: 'local_bar',
    code: 'e540',
  },
  {
    name: 'local_cafe',
    code: 'e541',
  },
  {
    name: 'local_car_wash',
    code: 'e542',
  },
  {
    name: 'local_convenience_store',
    code: 'e543',
  },
  {
    name: 'local_dining',
    code: 'e556',
  },
  {
    name: 'local_drink',
    code: 'e544',
  },
  {
    name: 'local_fire_department',
    code: 'ef55',
  },
  {
    name: 'local_florist',
    code: 'e545',
  },
  {
    name: 'local_gas_station',
    code: 'e546',
  },
  {
    name: 'local_grocery_store',
    code: 'e547',
  },
  {
    name: 'local_hospital',
    code: 'e548',
  },
  {
    name: 'local_hotel',
    code: 'e549',
  },
  {
    name: 'local_laundry_service',
    code: 'e54a',
  },
  {
    name: 'local_library',
    code: 'e54b',
  },
  {
    name: 'local_mall',
    code: 'e54c',
  },
  {
    name: 'local_movies',
    code: 'e54d',
  },
  {
    name: 'local_offer',
    code: 'e54e',
  },
  {
    name: 'local_parking',
    code: 'e54f',
  },
  {
    name: 'local_pharmacy',
    code: 'e550',
  },
  {
    name: 'local_phone',
    code: 'e551',
  },
  {
    name: 'local_pizza',
    code: 'e552',
  },
  {
    name: 'local_play',
    code: 'e553',
  },
  {
    name: 'local_police',
    code: 'ef56',
  },
  {
    name: 'local_post_office',
    code: 'e554',
  },
  {
    name: 'local_print_shop',
    code: 'e555',
  },
  {
    name: 'local_printshop',
    code: 'e555',
  },
  {
    name: 'local_restaurant',
    code: 'e556',
  },
  {
    name: 'local_see',
    code: 'e557',
  },
  {
    name: 'local_shipping',
    code: 'e558',
  },
  {
    name: 'local_taxi',
    code: 'e559',
  },
  {
    name: 'location_city',
    code: 'e7f1',
  },
  {
    name: 'location_disabled',
    code: 'e1b6',
  },
  {
    name: 'location_history',
    code: 'e55a',
  },
  {
    name: 'location_off',
    code: 'e0c7',
  },
  {
    name: 'location_on',
    code: 'e0c8',
  },
  {
    name: 'location_pin',
    code: 'f1db',
  },
  {
    name: 'location_searching',
    code: 'e1b7',
  },
  {
    name: 'lock',
    code: 'e897',
  },
  {
    name: 'lock_clock',
    code: 'ef57',
  },
  {
    name: 'lock_open',
    code: 'e898',
  },
  {
    name: 'lock_outline',
    code: 'e899',
  },
  {
    name: 'login',
    code: 'ea77',
  },
  {
    name: 'logout',
    code: 'e9ba',
  },
  {
    name: 'looks',
    code: 'e3fc',
  },
  {
    name: 'looks_3',
    code: 'e3fb',
  },
  {
    name: 'looks_4',
    code: 'e3fd',
  },
  {
    name: 'looks_5',
    code: 'e3fe',
  },
  {
    name: 'looks_6',
    code: 'e3ff',
  },
  {
    name: 'looks_one',
    code: 'e400',
  },
  {
    name: 'looks_two',
    code: 'e401',
  },
  {
    name: 'loop',
    code: 'e028',
  },
  {
    name: 'loupe',
    code: 'e402',
  },
  {
    name: 'low_priority',
    code: 'e16d',
  },
  {
    name: 'loyalty',
    code: 'e89a',
  },
  {
    name: 'lte_mobiledata',
    code: 'f02c',
  },
  {
    name: 'lte_plus_mobiledata',
    code: 'f02d',
  },
  {
    name: 'luggage',
    code: 'f235',
  },
  {
    name: 'lunch_dining',
    code: 'ea61',
  },
  {
    name: 'mail',
    code: 'e158',
  },
  {
    name: 'mail_outline',
    code: 'e0e1',
  },
  {
    name: 'male',
    code: 'e58e',
  },
  {
    name: 'manage_accounts',
    code: 'f02e',
  },
  {
    name: 'manage_search',
    code: 'f02f',
  },
  {
    name: 'map',
    code: 'e55b',
  },
  {
    name: 'maps_home_work',
    code: 'f030',
  },
  {
    name: 'maps_ugc',
    code: 'ef58',
  },
  {
    name: 'margin',
    code: 'e9bb',
  },
  {
    name: 'mark_as_unread',
    code: 'e9bc',
  },
  {
    name: 'mark_chat_read',
    code: 'f18b',
  },
  {
    name: 'mark_chat_unread',
    code: 'f189',
  },
  {
    name: 'mark_email_read',
    code: 'f18c',
  },
  {
    name: 'mark_email_unread',
    code: 'f18a',
  },
  {
    name: 'markunread',
    code: 'e159',
  },
  {
    name: 'markunread_mailbox',
    code: 'e89b',
  },
  {
    name: 'masks',
    code: 'f218',
  },
  {
    name: 'maximize',
    code: 'e930',
  },
  {
    name: 'media_bluetooth_off',
    code: 'f031',
  },
  {
    name: 'media_bluetooth_on',
    code: 'f032',
  },
  {
    name: 'mediation',
    code: 'efa7',
  },
  {
    name: 'medical_services',
    code: 'f109',
  },
  {
    name: 'medication',
    code: 'f033',
  },
  {
    name: 'meeting_room',
    code: 'eb4f',
  },
  {
    name: 'memory',
    code: 'e322',
  },
  {
    name: 'menu',
    code: 'e5d2',
  },
  {
    name: 'menu_book',
    code: 'ea19',
  },
  {
    name: 'menu_open',
    code: 'e9bd',
  },
  {
    name: 'merge_type',
    code: 'e252',
  },
  {
    name: 'message',
    code: 'e0c9',
  },
  {
    name: 'messenger',
    code: 'e0ca',
  },
  {
    name: 'messenger_outline',
    code: 'e0cb',
  },
  {
    name: 'mic',
    code: 'e029',
  },
  {
    name: 'mic_external_off',
    code: 'ef59',
  },
  {
    name: 'mic_external_on',
    code: 'ef5a',
  },
  {
    name: 'mic_none',
    code: 'e02a',
  },
  {
    name: 'mic_off',
    code: 'e02b',
  },
  {
    name: 'microwave',
    code: 'f204',
  },
  {
    name: 'military_tech',
    code: 'ea3f',
  },
  {
    name: 'minimize',
    code: 'e931',
  },
  {
    name: 'miscellaneous_services',
    code: 'f10c',
  },
  {
    name: 'missed_video_call',
    code: 'e073',
  },
  {
    name: 'mms',
    code: 'e618',
  },
  {
    name: 'mobile_friendly',
    code: 'e200',
  },
  {
    name: 'mobile_off',
    code: 'e201',
  },
  {
    name: 'mobile_screen_share',
    code: 'e0e7',
  },
  {
    name: 'mobiledata_off',
    code: 'f034',
  },
  {
    name: 'mode',
    code: 'f097',
  },
  {
    name: 'mode_comment',
    code: 'e253',
  },
  {
    name: 'mode_edit',
    code: 'e254',
  },
  {
    name: 'mode_edit_outline',
    code: 'f035',
  },
  {
    name: 'mode_night',
    code: 'f036',
  },
  {
    name: 'mode_standby',
    code: 'f037',
  },
  {
    name: 'model_training',
    code: 'f0cf',
  },
  {
    name: 'monetization_on',
    code: 'e263',
  },
  {
    name: 'money',
    code: 'e57d',
  },
  {
    name: 'money_off',
    code: 'e25c',
  },
  {
    name: 'money_off_csred',
    code: 'f038',
  },
  {
    name: 'monitor',
    code: 'ef5b',
  },
  {
    name: 'monitor_weight',
    code: 'f039',
  },
  {
    name: 'monochrome_photos',
    code: 'e403',
  },
  {
    name: 'mood',
    code: 'e7f2',
  },
  {
    name: 'mood_bad',
    code: 'e7f3',
  },
  {
    name: 'moped',
    code: 'eb28',
  },
  {
    name: 'more',
    code: 'e619',
  },
  {
    name: 'more_horiz',
    code: 'e5d3',
  },
  {
    name: 'more_time',
    code: 'ea5d',
  },
  {
    name: 'more_vert',
    code: 'e5d4',
  },
  {
    name: 'motion_photos_auto',
    code: 'f03a',
  },
  {
    name: 'motion_photos_off',
    code: 'e9c0',
  },
  {
    name: 'motion_photos_on',
    code: 'e9c1',
  },
  {
    name: 'motion_photos_pause',
    code: 'f227',
  },
  {
    name: 'motion_photos_paused',
    code: 'e9c2',
  },
  {
    name: 'motorcycle',
    code: 'e91b',
  },
  {
    name: 'mouse',
    code: 'e323',
  },
  {
    name: 'move_to_inbox',
    code: 'e168',
  },
  {
    name: 'movie',
    code: 'e02c',
  },
  {
    name: 'movie_creation',
    code: 'e404',
  },
  {
    name: 'movie_filter',
    code: 'e43a',
  },
  {
    name: 'moving',
    code: 'e501',
  },
  {
    name: 'mp',
    code: 'e9c3',
  },
  {
    name: 'multiline_chart',
    code: 'e6df',
  },
  {
    name: 'multiple_stop',
    code: 'f1b9',
  },
  {
    name: 'multitrack_audio',
    code: 'e1b8',
  },
  {
    name: 'museum',
    code: 'ea36',
  },
  {
    name: 'music_note',
    code: 'e405',
  },
  {
    name: 'music_off',
    code: 'e440',
  },
  {
    name: 'music_video',
    code: 'e063',
  },
  {
    name: 'my_library_add',
    code: 'e02e',
  },
  {
    name: 'my_library_books',
    code: 'e02f',
  },
  {
    name: 'my_library_music',
    code: 'e030',
  },
  {
    name: 'my_location',
    code: 'e55c',
  },
  {
    name: 'nat',
    code: 'ef5c',
  },
  {
    name: 'nature',
    code: 'e406',
  },
  {
    name: 'nature_people',
    code: 'e407',
  },
  {
    name: 'navigate_before',
    code: 'e408',
  },
  {
    name: 'navigate_next',
    code: 'e409',
  },
  {
    name: 'navigation',
    code: 'e55d',
  },
  {
    name: 'near_me',
    code: 'e569',
  },
  {
    name: 'near_me_disabled',
    code: 'f1ef',
  },
  {
    name: 'nearby_error',
    code: 'f03b',
  },
  {
    name: 'nearby_off',
    code: 'f03c',
  },
  {
    name: 'network_cell',
    code: 'e1b9',
  },
  {
    name: 'network_check',
    code: 'e640',
  },
  {
    name: 'network_locked',
    code: 'e61a',
  },
  {
    name: 'network_wifi',
    code: 'e1ba',
  },
  {
    name: 'new_label',
    code: 'e609',
  },
  {
    name: 'new_releases',
    code: 'e031',
  },
  {
    name: 'next_plan',
    code: 'ef5d',
  },
  {
    name: 'next_week',
    code: 'e16a',
  },
  {
    name: 'nfc',
    code: 'e1bb',
  },
  {
    name: 'night_shelter',
    code: 'f1f1',
  },
  {
    name: 'nightlife',
    code: 'ea62',
  },
  {
    name: 'nightlight',
    code: 'f03d',
  },
  {
    name: 'nightlight_round',
    code: 'ef5e',
  },
  {
    name: 'nights_stay',
    code: 'ea46',
  },
  {
    name: 'no_accounts',
    code: 'f03e',
  },
  {
    name: 'no_backpack',
    code: 'f237',
  },
  {
    name: 'no_cell',
    code: 'f1a4',
  },
  {
    name: 'no_drinks',
    code: 'f1a5',
  },
  {
    name: 'no_encryption',
    code: 'e641',
  },
  {
    name: 'no_encryption_gmailerrorred',
    code: 'f03f',
  },
  {
    name: 'no_flash',
    code: 'f1a6',
  },
  {
    name: 'no_food',
    code: 'f1a7',
  },
  {
    name: 'no_luggage',
    code: 'f23b',
  },
  {
    name: 'no_meals',
    code: 'f1d6',
  },
  {
    name: 'no_meals_ouline',
    code: 'f229',
  },
  {
    name: 'no_meeting_room',
    code: 'eb4e',
  },
  {
    name: 'no_photography',
    code: 'f1a8',
  },
  {
    name: 'no_sim',
    code: 'e0cc',
  },
  {
    name: 'no_stroller',
    code: 'f1af',
  },
  {
    name: 'no_transfer',
    code: 'f1d5',
  },
  {
    name: 'nordic_walking',
    code: 'e50e',
  },
  {
    name: 'north',
    code: 'f1e0',
  },
  {
    name: 'north_east',
    code: 'f1e1',
  },
  {
    name: 'north_west',
    code: 'f1e2',
  },
  {
    name: 'not_accessible',
    code: 'f0fe',
  },
  {
    name: 'not_interested',
    code: 'e033',
  },
  {
    name: 'not_listed_location',
    code: 'e575',
  },
  {
    name: 'not_started',
    code: 'f0d1',
  },
  {
    name: 'note',
    code: 'e06f',
  },
  {
    name: 'note_add',
    code: 'e89c',
  },
  {
    name: 'note_alt',
    code: 'f040',
  },
  {
    name: 'notes',
    code: 'e26c',
  },
  {
    name: 'notification_add',
    code: 'e399',
  },
  {
    name: 'notification_important',
    code: 'e004',
  },
  {
    name: 'notifications',
    code: 'e7f4',
  },
  {
    name: 'notifications_active',
    code: 'e7f7',
  },
  {
    name: 'notifications_none',
    code: 'e7f5',
  },
  {
    name: 'notifications_off',
    code: 'e7f6',
  },
  {
    name: 'notifications_on',
    code: 'e7f7',
  },
  {
    name: 'notifications_paused',
    code: 'e7f8',
  },
  {
    name: 'now_wallpaper',
    code: 'e1bc',
  },
  {
    name: 'now_widgets',
    code: 'e1bd',
  },
  {
    name: 'offline_bolt',
    code: 'e932',
  },
  {
    name: 'offline_pin',
    code: 'e90a',
  },
  {
    name: 'offline_share',
    code: 'e9c5',
  },
  {
    name: 'ondemand_video',
    code: 'e63a',
  },
  {
    name: 'online_prediction',
    code: 'f0eb',
  },
  {
    name: 'opacity',
    code: 'e91c',
  },
  {
    name: 'open_in_browser',
    code: 'e89d',
  },
  {
    name: 'open_in_full',
    code: 'f1ce',
  },
  {
    name: 'open_in_new',
    code: 'e89e',
  },
  {
    name: 'open_in_new_off',
    code: 'e4f6',
  },
  {
    name: 'open_with',
    code: 'e89f',
  },
  {
    name: 'other_houses',
    code: 'e58c',
  },
  {
    name: 'outbond',
    code: 'f228',
  },
  {
    name: 'outbound',
    code: 'e1ca',
  },
  {
    name: 'outbox',
    code: 'ef5f',
  },
  {
    name: 'outdoor_grill',
    code: 'ea47',
  },
  {
    name: 'outgoing_mail',
    code: 'f0d2',
  },
  {
    name: 'outlet',
    code: 'f1d4',
  },
  {
    name: 'outlined_flag',
    code: 'e16e',
  },
  {
    name: 'padding',
    code: 'e9c8',
  },
  {
    name: 'pages',
    code: 'e7f9',
  },
  {
    name: 'pageview',
    code: 'e8a0',
  },
  {
    name: 'paid',
    code: 'f041',
  },
  {
    name: 'palette',
    code: 'e40a',
  },
  {
    name: 'pan_tool',
    code: 'e925',
  },
  {
    name: 'panorama',
    code: 'e40b',
  },
  {
    name: 'panorama_fish_eye',
    code: 'e40c',
  },
  {
    name: 'panorama_fisheye',
    code: 'e40c',
  },
  {
    name: 'panorama_horizontal',
    code: 'e40d',
  },
  {
    name: 'panorama_horizontal_select',
    code: 'ef60',
  },
  {
    name: 'panorama_photosphere',
    code: 'e9c9',
  },
  {
    name: 'panorama_photosphere_select',
    code: 'e9ca',
  },
  {
    name: 'panorama_vertical',
    code: 'e40e',
  },
  {
    name: 'panorama_vertical_select',
    code: 'ef61',
  },
  {
    name: 'panorama_wide_angle',
    code: 'e40f',
  },
  {
    name: 'panorama_wide_angle_select',
    code: 'ef62',
  },
  {
    name: 'paragliding',
    code: 'e50f',
  },
  {
    name: 'park',
    code: 'ea63',
  },
  {
    name: 'party_mode',
    code: 'e7fa',
  },
  {
    name: 'password',
    code: 'f042',
  },
  {
    name: 'pattern',
    code: 'f043',
  },
  {
    name: 'pause',
    code: 'e034',
  },
  {
    name: 'pause_circle',
    code: 'e1a2',
  },
  {
    name: 'pause_circle_filled',
    code: 'e035',
  },
  {
    name: 'pause_circle_outline',
    code: 'e036',
  },
  {
    name: 'pause_presentation',
    code: 'e0ea',
  },
  {
    name: 'payment',
    code: 'e8a1',
  },
  {
    name: 'payments',
    code: 'ef63',
  },
  {
    name: 'pedal_bike',
    code: 'eb29',
  },
  {
    name: 'pending',
    code: 'ef64',
  },
  {
    name: 'pending_actions',
    code: 'f1bb',
  },
  {
    name: 'people',
    code: 'e7fb',
  },
  {
    name: 'people_alt',
    code: 'ea21',
  },
  {
    name: 'people_outline',
    code: 'e7fc',
  },
  {
    name: 'perm_camera_mic',
    code: 'e8a2',
  },
  {
    name: 'perm_contact_cal',
    code: 'e8a3',
  },
  {
    name: 'perm_contact_calendar',
    code: 'e8a3',
  },
  {
    name: 'perm_data_setting',
    code: 'e8a4',
  },
  {
    name: 'perm_device_info',
    code: 'e8a5',
  },
  {
    name: 'perm_device_information',
    code: 'e8a5',
  },
  {
    name: 'perm_identity',
    code: 'e8a6',
  },
  {
    name: 'perm_media',
    code: 'e8a7',
  },
  {
    name: 'perm_phone_msg',
    code: 'e8a8',
  },
  {
    name: 'perm_scan_wifi',
    code: 'e8a9',
  },
  {
    name: 'person',
    code: 'e7fd',
  },
  {
    name: 'person_add',
    code: 'e7fe',
  },
  {
    name: 'person_add_alt',
    code: 'ea4d',
  },
  {
    name: 'person_add_alt_1',
    code: 'ef65',
  },
  {
    name: 'person_add_disabled',
    code: 'e9cb',
  },
  {
    name: 'person_off',
    code: 'e510',
  },
  {
    name: 'person_outline',
    code: 'e7ff',
  },
  {
    name: 'person_pin',
    code: 'e55a',
  },
  {
    name: 'person_pin_circle',
    code: 'e56a',
  },
  {
    name: 'person_remove',
    code: 'ef66',
  },
  {
    name: 'person_remove_alt_1',
    code: 'ef67',
  },
  {
    name: 'person_search',
    code: 'f106',
  },
  {
    name: 'personal_injury',
    code: 'e6da',
  },
  {
    name: 'personal_video',
    code: 'e63b',
  },
  {
    name: 'pest_control',
    code: 'f0fa',
  },
  {
    name: 'pest_control_rodent',
    code: 'f0fd',
  },
  {
    name: 'pets',
    code: 'e91d',
  },
  {
    name: 'phone',
    code: 'e0cd',
  },
  {
    name: 'phone_android',
    code: 'e324',
  },
  {
    name: 'phone_bluetooth_speaker',
    code: 'e61b',
  },
  {
    name: 'phone_callback',
    code: 'e649',
  },
  {
    name: 'phone_disabled',
    code: 'e9cc',
  },
  {
    name: 'phone_enabled',
    code: 'e9cd',
  },
  {
    name: 'phone_forwarded',
    code: 'e61c',
  },
  {
    name: 'phone_in_talk',
    code: 'e61d',
  },
  {
    name: 'phone_iphone',
    code: 'e325',
  },
  {
    name: 'phone_locked',
    code: 'e61e',
  },
  {
    name: 'phone_missed',
    code: 'e61f',
  },
  {
    name: 'phone_paused',
    code: 'e620',
  },
  {
    name: 'phonelink',
    code: 'e326',
  },
  {
    name: 'phonelink_erase',
    code: 'e0db',
  },
  {
    name: 'phonelink_lock',
    code: 'e0dc',
  },
  {
    name: 'phonelink_off',
    code: 'e327',
  },
  {
    name: 'phonelink_ring',
    code: 'e0dd',
  },
  {
    name: 'phonelink_setup',
    code: 'e0de',
  },
  {
    name: 'photo',
    code: 'e410',
  },
  {
    name: 'photo_album',
    code: 'e411',
  },
  {
    name: 'photo_camera',
    code: 'e412',
  },
  {
    name: 'photo_camera_back',
    code: 'ef68',
  },
  {
    name: 'photo_camera_front',
    code: 'ef69',
  },
  {
    name: 'photo_filter',
    code: 'e43b',
  },
  {
    name: 'photo_library',
    code: 'e413',
  },
  {
    name: 'photo_size_select_actual',
    code: 'e432',
  },
  {
    name: 'photo_size_select_large',
    code: 'e433',
  },
  {
    name: 'photo_size_select_small',
    code: 'e434',
  },
  {
    name: 'piano',
    code: 'e521',
  },
  {
    name: 'piano_off',
    code: 'e520',
  },
  {
    name: 'picture_as_pdf',
    code: 'e415',
  },
  {
    name: 'picture_in_picture',
    code: 'e8aa',
  },
  {
    name: 'picture_in_picture_alt',
    code: 'e911',
  },
  {
    name: 'pie_chart',
    code: 'e6c4',
  },
  {
    name: 'pie_chart_outline',
    code: 'f044',
  },
  {
    name: 'pie_chart_outlined',
    code: 'e6c5',
  },
  {
    name: 'pin',
    code: 'f045',
  },
  {
    name: 'pin_drop',
    code: 'e55e',
  },
  {
    name: 'pin_end',
    code: 'e767',
  },
  {
    name: 'pin_invoke',
    code: 'e763',
  },
  {
    name: 'pivot_table_chart',
    code: 'e9ce',
  },
  {
    name: 'place',
    code: 'e55f',
  },
  {
    name: 'plagiarism',
    code: 'ea5a',
  },
  {
    name: 'play_arrow',
    code: 'e037',
  },
  {
    name: 'play_circle',
    code: 'e1c4',
  },
  {
    name: 'play_circle_fill',
    code: 'e038',
  },
  {
    name: 'play_circle_filled',
    code: 'e038',
  },
  {
    name: 'play_circle_outline',
    code: 'e039',
  },
  {
    name: 'play_disabled',
    code: 'ef6a',
  },
  {
    name: 'play_for_work',
    code: 'e906',
  },
  {
    name: 'play_lesson',
    code: 'f047',
  },
  {
    name: 'playlist_add',
    code: 'e03b',
  },
  {
    name: 'playlist_add_check',
    code: 'e065',
  },
  {
    name: 'playlist_play',
    code: 'e05f',
  },
  {
    name: 'plumbing',
    code: 'f107',
  },
  {
    name: 'plus_one',
    code: 'e800',
  },
  {
    name: 'podcasts',
    code: 'f048',
  },
  {
    name: 'point_of_sale',
    code: 'f17e',
  },
  {
    name: 'policy',
    code: 'ea17',
  },
  {
    name: 'poll',
    code: 'e801',
  },
  {
    name: 'polymer',
    code: 'e8ab',
  },
  {
    name: 'pool',
    code: 'eb48',
  },
  {
    name: 'portable_wifi_off',
    code: 'e0ce',
  },
  {
    name: 'portrait',
    code: 'e416',
  },
  {
    name: 'post_add',
    code: 'ea20',
  },
  {
    name: 'power',
    code: 'e63c',
  },
  {
    name: 'power_input',
    code: 'e336',
  },
  {
    name: 'power_off',
    code: 'e646',
  },
  {
    name: 'power_settings_new',
    code: 'e8ac',
  },
  {
    name: 'precision_manufacturing',
    code: 'f049',
  },
  {
    name: 'pregnant_woman',
    code: 'e91e',
  },
  {
    name: 'present_to_all',
    code: 'e0df',
  },
  {
    name: 'preview',
    code: 'f1c5',
  },
  {
    name: 'price_change',
    code: 'f04a',
  },
  {
    name: 'price_check',
    code: 'f04b',
  },
  {
    name: 'print',
    code: 'e8ad',
  },
  {
    name: 'print_disabled',
    code: 'e9cf',
  },
  {
    name: 'priority_high',
    code: 'e645',
  },
  {
    name: 'privacy_tip',
    code: 'f0dc',
  },
  {
    name: 'private_connectivity',
    code: 'e744',
  },
  {
    name: 'production_quantity_limits',
    code: 'e1d1',
  },
  {
    name: 'psychology',
    code: 'ea4a',
  },
  {
    name: 'public',
    code: 'e80b',
  },
  {
    name: 'public_off',
    code: 'f1ca',
  },
  {
    name: 'publish',
    code: 'e255',
  },
  {
    name: 'published_with_changes',
    code: 'f232',
  },
  {
    name: 'push_pin',
    code: 'f10d',
  },
  {
    name: 'qr_code',
    code: 'ef6b',
  },
  {
    name: 'qr_code_2',
    code: 'e00a',
  },
  {
    name: 'qr_code_scanner',
    code: 'f206',
  },
  {
    name: 'query_builder',
    code: 'e8ae',
  },
  {
    name: 'query_stats',
    code: 'e4fc',
  },
  {
    name: 'question_answer',
    code: 'e8af',
  },
  {
    name: 'queue',
    code: 'e03c',
  },
  {
    name: 'queue_music',
    code: 'e03d',
  },
  {
    name: 'queue_play_next',
    code: 'e066',
  },
  {
    name: 'quick_contacts_dialer',
    code: 'e0cf',
  },
  {
    name: 'quick_contacts_mail',
    code: 'e0d0',
  },
  {
    name: 'quickreply',
    code: 'ef6c',
  },
  {
    name: 'quiz',
    code: 'f04c',
  },
  {
    name: 'r_mobiledata',
    code: 'f04d',
  },
  {
    name: 'radar',
    code: 'f04e',
  },
  {
    name: 'radio',
    code: 'e03e',
  },
  {
    name: 'radio_button_checked',
    code: 'e837',
  },
  {
    name: 'radio_button_off',
    code: 'e836',
  },
  {
    name: 'radio_button_on',
    code: 'e837',
  },
  {
    name: 'radio_button_unchecked',
    code: 'e836',
  },
  {
    name: 'railway_alert',
    code: 'e9d1',
  },
  {
    name: 'ramen_dining',
    code: 'ea64',
  },
  {
    name: 'rate_review',
    code: 'e560',
  },
  {
    name: 'raw_off',
    code: 'f04f',
  },
  {
    name: 'raw_on',
    code: 'f050',
  },
  {
    name: 'read_more',
    code: 'ef6d',
  },
  {
    name: 'real_estate_agent',
    code: 'e73a',
  },
  {
    name: 'receipt',
    code: 'e8b0',
  },
  {
    name: 'receipt_long',
    code: 'ef6e',
  },
  {
    name: 'recent_actors',
    code: 'e03f',
  },
  {
    name: 'recommend',
    code: 'e9d2',
  },
  {
    name: 'record_voice_over',
    code: 'e91f',
  },
  {
    name: 'recycling',
    code: 'e760',
  },
  {
    name: 'redeem',
    code: 'e8b1',
  },
  {
    name: 'redo',
    code: 'e15a',
  },
  {
    name: 'reduce_capacity',
    code: 'f21c',
  },
  {
    name: 'refresh',
    code: 'e5d5',
  },
  {
    name: 'remember_me',
    code: 'f051',
  },
  {
    name: 'remove',
    code: 'e15b',
  },
  {
    name: 'remove_circle',
    code: 'e15c',
  },
  {
    name: 'remove_circle_outline',
    code: 'e15d',
  },
  {
    name: 'remove_done',
    code: 'e9d3',
  },
  {
    name: 'remove_from_queue',
    code: 'e067',
  },
  {
    name: 'remove_moderator',
    code: 'e9d4',
  },
  {
    name: 'remove_red_eye',
    code: 'e417',
  },
  {
    name: 'remove_shopping_cart',
    code: 'e928',
  },
  {
    name: 'reorder',
    code: 'e8fe',
  },
  {
    name: 'repeat',
    code: 'e040',
  },
  {
    name: 'repeat_on',
    code: 'e9d6',
  },
  {
    name: 'repeat_one',
    code: 'e041',
  },
  {
    name: 'repeat_one_on',
    code: 'e9d7',
  },
  {
    name: 'replay',
    code: 'e042',
  },
  {
    name: 'replay_10',
    code: 'e059',
  },
  {
    name: 'replay_30',
    code: 'e05a',
  },
  {
    name: 'replay_5',
    code: 'e05b',
  },
  {
    name: 'replay_circle_filled',
    code: 'e9d8',
  },
  {
    name: 'reply',
    code: 'e15e',
  },
  {
    name: 'reply_all',
    code: 'e15f',
  },
  {
    name: 'report',
    code: 'e160',
  },
  {
    name: 'report_gmailerrorred',
    code: 'f052',
  },
  {
    name: 'report_off',
    code: 'e170',
  },
  {
    name: 'report_problem',
    code: 'e8b2',
  },
  {
    name: 'request_page',
    code: 'f22c',
  },
  {
    name: 'request_quote',
    code: 'f1b6',
  },
  {
    name: 'reset_tv',
    code: 'e9d9',
  },
  {
    name: 'restart_alt',
    code: 'f053',
  },
  {
    name: 'restaurant',
    code: 'e56c',
  },
  {
    name: 'restaurant_menu',
    code: 'e561',
  },
  {
    name: 'restore',
    code: 'e8b3',
  },
  {
    name: 'restore_from_trash',
    code: 'e938',
  },
  {
    name: 'restore_page',
    code: 'e929',
  },
  {
    name: 'reviews',
    code: 'f054',
  },
  {
    name: 'rice_bowl',
    code: 'f1f5',
  },
  {
    name: 'ring_volume',
    code: 'e0d1',
  },
  {
    name: 'roofing',
    code: 'f201',
  },
  {
    name: 'room',
    code: 'e8b4',
  },
  {
    name: 'room_preferences',
    code: 'f1b8',
  },
  {
    name: 'room_service',
    code: 'eb49',
  },
  {
    name: 'rotate_90_degrees_ccw',
    code: 'e418',
  },
  {
    name: 'rotate_left',
    code: 'e419',
  },
  {
    name: 'rotate_right',
    code: 'e41a',
  },
  {
    name: 'rounded_corner',
    code: 'e920',
  },
  {
    name: 'router',
    code: 'e328',
  },
  {
    name: 'rowing',
    code: 'e921',
  },
  {
    name: 'rss_feed',
    code: 'e0e5',
  },
  {
    name: 'rsvp',
    code: 'f055',
  },
  {
    name: 'rtt',
    code: 'e9ad',
  },
  {
    name: 'rule',
    code: 'f1c2',
  },
  {
    name: 'rule_folder',
    code: 'f1c9',
  },
  {
    name: 'run_circle',
    code: 'ef6f',
  },
  {
    name: 'running_with_errors',
    code: 'e51d',
  },
  {
    name: 'rv_hookup',
    code: 'e642',
  },
  {
    name: 'safety_divider',
    code: 'e1cc',
  },
  {
    name: 'sailing',
    code: 'e502',
  },
  {
    name: 'sanitizer',
    code: 'f21d',
  },
  {
    name: 'satellite',
    code: 'e562',
  },
  {
    name: 'save',
    code: 'e161',
  },
  {
    name: 'save_alt',
    code: 'e171',
  },
  {
    name: 'saved_search',
    code: 'ea11',
  },
  {
    name: 'savings',
    code: 'e2eb',
  },
  {
    name: 'scanner',
    code: 'e329',
  },
  {
    name: 'scatter_plot',
    code: 'e268',
  },
  {
    name: 'schedule',
    code: 'e8b5',
  },
  {
    name: 'schedule_send',
    code: 'ea0a',
  },
  {
    name: 'schema',
    code: 'e4fd',
  },
  {
    name: 'school',
    code: 'e80c',
  },
  {
    name: 'science',
    code: 'ea4b',
  },
  {
    name: 'score',
    code: 'e269',
  },
  {
    name: 'screen_lock_landscape',
    code: 'e1be',
  },
  {
    name: 'screen_lock_portrait',
    code: 'e1bf',
  },
  {
    name: 'screen_lock_rotation',
    code: 'e1c0',
  },
  {
    name: 'screen_rotation',
    code: 'e1c1',
  },
  {
    name: 'screen_search_desktop',
    code: 'ef70',
  },
  {
    name: 'screen_share',
    code: 'e0e2',
  },
  {
    name: 'screenshot',
    code: 'f056',
  },
  {
    name: 'sd',
    code: 'e9dd',
  },
  {
    name: 'sd_card',
    code: 'e623',
  },
  {
    name: 'sd_card_alert',
    code: 'f057',
  },
  {
    name: 'sd_storage',
    code: 'e1c2',
  },
  {
    name: 'search',
    code: 'e8b6',
  },
  {
    name: 'search_off',
    code: 'ea76',
  },
  {
    name: 'security',
    code: 'e32a',
  },
  {
    name: 'security_update',
    code: 'f058',
  },
  {
    name: 'security_update_good',
    code: 'f059',
  },
  {
    name: 'security_update_warning',
    code: 'f05a',
  },
  {
    name: 'segment',
    code: 'e94b',
  },
  {
    name: 'select_all',
    code: 'e162',
  },
  {
    name: 'self_improvement',
    code: 'ea78',
  },
  {
    name: 'sell',
    code: 'f05b',
  },
  {
    name: 'send',
    code: 'e163',
  },
  {
    name: 'send_and_archive',
    code: 'ea0c',
  },
  {
    name: 'send_to_mobile',
    code: 'f05c',
  },
  {
    name: 'sensor_door',
    code: 'f1b5',
  },
  {
    name: 'sensor_window',
    code: 'f1b4',
  },
  {
    name: 'sensors',
    code: 'e51e',
  },
  {
    name: 'sensors_off',
    code: 'e51f',
  },
  {
    name: 'sentiment_dissatisfied',
    code: 'e811',
  },
  {
    name: 'sentiment_neutral',
    code: 'e812',
  },
  {
    name: 'sentiment_satisfied',
    code: 'e813',
  },
  {
    name: 'sentiment_satisfied_alt',
    code: 'e0ed',
  },
  {
    name: 'sentiment_very_dissatisfied',
    code: 'e814',
  },
  {
    name: 'sentiment_very_satisfied',
    code: 'e815',
  },
  {
    name: 'set_meal',
    code: 'f1ea',
  },
  {
    name: 'settings',
    code: 'e8b8',
  },
  {
    name: 'settings_accessibility',
    code: 'f05d',
  },
  {
    name: 'settings_applications',
    code: 'e8b9',
  },
  {
    name: 'settings_backup_restore',
    code: 'e8ba',
  },
  {
    name: 'settings_bluetooth',
    code: 'e8bb',
  },
  {
    name: 'settings_brightness',
    code: 'e8bd',
  },
  {
    name: 'settings_cell',
    code: 'e8bc',
  },
  {
    name: 'settings_display',
    code: 'e8bd',
  },
  {
    name: 'settings_ethernet',
    code: 'e8be',
  },
  {
    name: 'settings_input_antenna',
    code: 'e8bf',
  },
  {
    name: 'settings_input_component',
    code: 'e8c0',
  },
  {
    name: 'settings_input_composite',
    code: 'e8c1',
  },
  {
    name: 'settings_input_hdmi',
    code: 'e8c2',
  },
  {
    name: 'settings_input_svideo',
    code: 'e8c3',
  },
  {
    name: 'settings_overscan',
    code: 'e8c4',
  },
  {
    name: 'settings_phone',
    code: 'e8c5',
  },
  {
    name: 'settings_power',
    code: 'e8c6',
  },
  {
    name: 'settings_remote',
    code: 'e8c7',
  },
  {
    name: 'settings_suggest',
    code: 'f05e',
  },
  {
    name: 'settings_system_daydream',
    code: 'e1c3',
  },
  {
    name: 'settings_voice',
    code: 'e8c8',
  },
  {
    name: 'share',
    code: 'e80d',
  },
  {
    name: 'share_arrival_time',
    code: 'e524',
  },
  {
    name: 'share_location',
    code: 'f05f',
  },
  {
    name: 'shield',
    code: 'e9e0',
  },
  {
    name: 'shop',
    code: 'e8c9',
  },
  {
    name: 'shop_2',
    code: 'e19e',
  },
  {
    name: 'shop_two',
    code: 'e8ca',
  },
  {
    name: 'shopping_bag',
    code: 'f1cc',
  },
  {
    name: 'shopping_basket',
    code: 'e8cb',
  },
  {
    name: 'shopping_cart',
    code: 'e8cc',
  },
  {
    name: 'short_text',
    code: 'e261',
  },
  {
    name: 'shortcut',
    code: 'f060',
  },
  {
    name: 'show_chart',
    code: 'e6e1',
  },
  {
    name: 'shower',
    code: 'f061',
  },
  {
    name: 'shuffle',
    code: 'e043',
  },
  {
    name: 'shuffle_on',
    code: 'e9e1',
  },
  {
    name: 'shutter_speed',
    code: 'e43d',
  },
  {
    name: 'sick',
    code: 'f220',
  },
  {
    name: 'signal_cellular_0_bar',
    code: 'f0a8',
  },
  {
    name: 'signal_cellular_4_bar',
    code: 'e1c8',
  },
  {
    name: 'signal_cellular_alt',
    code: 'e202',
  },
  {
    name: 'signal_cellular_connected_no_internet_0_bar',
    code: 'f0ac',
  },
  {
    name: 'signal_cellular_connected_no_internet_4_bar',
    code: 'e1cd',
  },
  {
    name: 'signal_cellular_no_sim',
    code: 'e1ce',
  },
  {
    name: 'signal_cellular_nodata',
    code: 'f062',
  },
  {
    name: 'signal_cellular_null',
    code: 'e1cf',
  },
  {
    name: 'signal_cellular_off',
    code: 'e1d0',
  },
  {
    name: 'signal_wifi_0_bar',
    code: 'f0b0',
  },
  {
    name: 'signal_wifi_4_bar',
    code: 'e1d8',
  },
  {
    name: 'signal_wifi_4_bar_lock',
    code: 'e1d9',
  },
  {
    name: 'signal_wifi_bad',
    code: 'f063',
  },
  {
    name: 'signal_wifi_connected_no_internet_4',
    code: 'f064',
  },
  {
    name: 'signal_wifi_off',
    code: 'e1da',
  },
  {
    name: 'signal_wifi_statusbar_4_bar',
    code: 'f065',
  },
  {
    name: 'signal_wifi_statusbar_connected_no_internet_4',
    code: 'f066',
  },
  {
    name: 'signal_wifi_statusbar_null',
    code: 'f067',
  },
  {
    name: 'sim_card',
    code: 'e32b',
  },
  {
    name: 'sim_card_alert',
    code: 'e624',
  },
  {
    name: 'sim_card_download',
    code: 'f068',
  },
  {
    name: 'single_bed',
    code: 'ea48',
  },
  {
    name: 'sip',
    code: 'f069',
  },
  {
    name: 'skateboarding',
    code: 'e511',
  },
  {
    name: 'skip_next',
    code: 'e044',
  },
  {
    name: 'skip_previous',
    code: 'e045',
  },
  {
    name: 'sledding',
    code: 'e512',
  },
  {
    name: 'slideshow',
    code: 'e41b',
  },
  {
    name: 'slow_motion_video',
    code: 'e068',
  },
  {
    name: 'smart_button',
    code: 'f1c1',
  },
  {
    name: 'smart_display',
    code: 'f06a',
  },
  {
    name: 'smart_screen',
    code: 'f06b',
  },
  {
    name: 'smart_toy',
    code: 'f06c',
  },
  {
    name: 'smartphone',
    code: 'e32c',
  },
  {
    name: 'smoke_free',
    code: 'eb4a',
  },
  {
    name: 'smoking_rooms',
    code: 'eb4b',
  },
  {
    name: 'sms',
    code: 'e625',
  },
  {
    name: 'sms_failed',
    code: 'e626',
  },
  {
    name: 'snippet_folder',
    code: 'f1c7',
  },
  {
    name: 'snooze',
    code: 'e046',
  },
  {
    name: 'snowboarding',
    code: 'e513',
  },
  {
    name: 'snowmobile',
    code: 'e503',
  },
  {
    name: 'snowshoeing',
    code: 'e514',
  },
  {
    name: 'soap',
    code: 'f1b2',
  },
  {
    name: 'social_distance',
    code: 'e1cb',
  },
  {
    name: 'sort',
    code: 'e164',
  },
  {
    name: 'sort_by_alpha',
    code: 'e053',
  },
  {
    name: 'source',
    code: 'f1c4',
  },
  {
    name: 'south',
    code: 'f1e3',
  },
  {
    name: 'south_east',
    code: 'f1e4',
  },
  {
    name: 'south_west',
    code: 'f1e5',
  },
  {
    name: 'spa',
    code: 'eb4c',
  },
  {
    name: 'space_bar',
    code: 'e256',
  },
  {
    name: 'space_dashboard',
    code: 'e66b',
  },
  {
    name: 'speaker',
    code: 'e32d',
  },
  {
    name: 'speaker_group',
    code: 'e32e',
  },
  {
    name: 'speaker_notes',
    code: 'e8cd',
  },
  {
    name: 'speaker_notes_off',
    code: 'e92a',
  },
  {
    name: 'speaker_phone',
    code: 'e0d2',
  },
  {
    name: 'speed',
    code: 'e9e4',
  },
  {
    name: 'spellcheck',
    code: 'e8ce',
  },
  {
    name: 'splitscreen',
    code: 'f06d',
  },
  {
    name: 'sports',
    code: 'ea30',
  },
  {
    name: 'sports_bar',
    code: 'f1f3',
  },
  {
    name: 'sports_baseball',
    code: 'ea51',
  },
  {
    name: 'sports_basketball',
    code: 'ea26',
  },
  {
    name: 'sports_cricket',
    code: 'ea27',
  },
  {
    name: 'sports_esports',
    code: 'ea28',
  },
  {
    name: 'sports_football',
    code: 'ea29',
  },
  {
    name: 'sports_golf',
    code: 'ea2a',
  },
  {
    name: 'sports_handball',
    code: 'ea33',
  },
  {
    name: 'sports_hockey',
    code: 'ea2b',
  },
  {
    name: 'sports_kabaddi',
    code: 'ea34',
  },
  {
    name: 'sports_mma',
    code: 'ea2c',
  },
  {
    name: 'sports_motorsports',
    code: 'ea2d',
  },
  {
    name: 'sports_rugby',
    code: 'ea2e',
  },
  {
    name: 'sports_score',
    code: 'f06e',
  },
  {
    name: 'sports_soccer',
    code: 'ea2f',
  },
  {
    name: 'sports_tennis',
    code: 'ea32',
  },
  {
    name: 'sports_volleyball',
    code: 'ea31',
  },
  {
    name: 'square_foot',
    code: 'ea49',
  },
  {
    name: 'stacked_bar_chart',
    code: 'e9e6',
  },
  {
    name: 'stacked_line_chart',
    code: 'f22b',
  },
  {
    name: 'stairs',
    code: 'f1a9',
  },
  {
    name: 'star',
    code: 'e838',
  },
  {
    name: 'star_border',
    code: 'e83a',
  },
  {
    name: 'star_border_purple500',
    code: 'f099',
  },
  {
    name: 'star_half',
    code: 'e839',
  },
  {
    name: 'star_outline',
    code: 'f06f',
  },
  {
    name: 'star_purple500',
    code: 'f09a',
  },
  {
    name: 'star_rate',
    code: 'f0ec',
  },
  {
    name: 'stars',
    code: 'e8d0',
  },
  {
    name: 'stay_current_landscape',
    code: 'e0d3',
  },
  {
    name: 'stay_current_portrait',
    code: 'e0d4',
  },
  {
    name: 'stay_primary_landscape',
    code: 'e0d5',
  },
  {
    name: 'stay_primary_portrait',
    code: 'e0d6',
  },
  {
    name: 'sticky_note_2',
    code: 'f1fc',
  },
  {
    name: 'stop',
    code: 'e047',
  },
  {
    name: 'stop_circle',
    code: 'ef71',
  },
  {
    name: 'stop_screen_share',
    code: 'e0e3',
  },
  {
    name: 'storage',
    code: 'e1db',
  },
  {
    name: 'store',
    code: 'e8d1',
  },
  {
    name: 'store_mall_directory',
    code: 'e563',
  },
  {
    name: 'storefront',
    code: 'ea12',
  },
  {
    name: 'storm',
    code: 'f070',
  },
  {
    name: 'straighten',
    code: 'e41c',
  },
  {
    name: 'stream',
    code: 'e9e9',
  },
  {
    name: 'streetview',
    code: 'e56e',
  },
  {
    name: 'strikethrough_s',
    code: 'e257',
  },
  {
    name: 'stroller',
    code: 'f1ae',
  },
  {
    name: 'style',
    code: 'e41d',
  },
  {
    name: 'subdirectory_arrow_left',
    code: 'e5d9',
  },
  {
    name: 'subdirectory_arrow_right',
    code: 'e5da',
  },
  {
    name: 'subject',
    code: 'e8d2',
  },
  {
    name: 'subscript',
    code: 'f111',
  },
  {
    name: 'subscriptions',
    code: 'e064',
  },
  {
    name: 'subtitles',
    code: 'e048',
  },
  {
    name: 'subtitles_off',
    code: 'ef72',
  },
  {
    name: 'subway',
    code: 'e56f',
  },
  {
    name: 'summarize',
    code: 'f071',
  },
  {
    name: 'superscript',
    code: 'f112',
  },
  {
    name: 'supervised_user_circle',
    code: 'e939',
  },
  {
    name: 'supervisor_account',
    code: 'e8d3',
  },
  {
    name: 'support',
    code: 'ef73',
  },
  {
    name: 'support_agent',
    code: 'f0e2',
  },
  {
    name: 'surfing',
    code: 'e515',
  },
  {
    name: 'surround_sound',
    code: 'e049',
  },
  {
    name: 'swap_calls',
    code: 'e0d7',
  },
  {
    name: 'swap_horiz',
    code: 'e8d4',
  },
  {
    name: 'swap_horizontal_circle',
    code: 'e933',
  },
  {
    name: 'swap_vert',
    code: 'e8d5',
  },
  {
    name: 'swap_vert_circle',
    code: 'e8d6',
  },
  {
    name: 'swap_vertical_circle',
    code: 'e8d6',
  },
  {
    name: 'swipe',
    code: 'e9ec',
  },
  {
    name: 'switch_account',
    code: 'e9ed',
  },
  {
    name: 'switch_camera',
    code: 'e41e',
  },
  {
    name: 'switch_left',
    code: 'f1d1',
  },
  {
    name: 'switch_right',
    code: 'f1d2',
  },
  {
    name: 'switch_video',
    code: 'e41f',
  },
  {
    name: 'sync',
    code: 'e627',
  },
  {
    name: 'sync_alt',
    code: 'ea18',
  },
  {
    name: 'sync_disabled',
    code: 'e628',
  },
  {
    name: 'sync_problem',
    code: 'e629',
  },
  {
    name: 'system_security_update',
    code: 'f072',
  },
  {
    name: 'system_security_update_good',
    code: 'f073',
  },
  {
    name: 'system_security_update_warning',
    code: 'f074',
  },
  {
    name: 'system_update',
    code: 'e62a',
  },
  {
    name: 'system_update_alt',
    code: 'e8d7',
  },
  {
    name: 'system_update_tv',
    code: 'e8d7',
  },
  {
    name: 'tab',
    code: 'e8d8',
  },
  {
    name: 'tab_unselected',
    code: 'e8d9',
  },
  {
    name: 'table_chart',
    code: 'e265',
  },
  {
    name: 'table_rows',
    code: 'f101',
  },
  {
    name: 'table_view',
    code: 'f1be',
  },
  {
    name: 'tablet',
    code: 'e32f',
  },
  {
    name: 'tablet_android',
    code: 'e330',
  },
  {
    name: 'tablet_mac',
    code: 'e331',
  },
  {
    name: 'tag',
    code: 'e9ef',
  },
  {
    name: 'tag_faces',
    code: 'e420',
  },
  {
    name: 'takeout_dining',
    code: 'ea74',
  },
  {
    name: 'tap_and_play',
    code: 'e62b',
  },
  {
    name: 'tapas',
    code: 'f1e9',
  },
  {
    name: 'task',
    code: 'f075',
  },
  {
    name: 'task_alt',
    code: 'e2e6',
  },
  {
    name: 'taxi_alert',
    code: 'ef74',
  },
  {
    name: 'terrain',
    code: 'e564',
  },
  {
    name: 'text_fields',
    code: 'e262',
  },
  {
    name: 'text_format',
    code: 'e165',
  },
  {
    name: 'text_rotate_up',
    code: 'e93a',
  },
  {
    name: 'text_rotate_vertical',
    code: 'e93b',
  },
  {
    name: 'text_rotation_angledown',
    code: 'e93c',
  },
  {
    name: 'text_rotation_angleup',
    code: 'e93d',
  },
  {
    name: 'text_rotation_down',
    code: 'e93e',
  },
  {
    name: 'text_rotation_none',
    code: 'e93f',
  },
  {
    name: 'text_snippet',
    code: 'f1c6',
  },
  {
    name: 'textsms',
    code: 'e0d8',
  },
  {
    name: 'texture',
    code: 'e421',
  },
  {
    name: 'theater_comedy',
    code: 'ea66',
  },
  {
    name: 'theaters',
    code: 'e8da',
  },
  {
    name: 'thermostat',
    code: 'f076',
  },
  {
    name: 'thermostat_auto',
    code: 'f077',
  },
  {
    name: 'thumb_down',
    code: 'e8db',
  },
  {
    name: 'thumb_down_alt',
    code: 'e816',
  },
  {
    name: 'thumb_down_off_alt',
    code: 'e9f2',
  },
  {
    name: 'thumb_up',
    code: 'e8dc',
  },
  {
    name: 'thumb_up_alt',
    code: 'e817',
  },
  {
    name: 'thumb_up_off_alt',
    code: 'e9f3',
  },
  {
    name: 'thumbs_up_down',
    code: 'e8dd',
  },
  {
    name: 'time_to_leave',
    code: 'e62c',
  },
  {
    name: 'timelapse',
    code: 'e422',
  },
  {
    name: 'timeline',
    code: 'e922',
  },
  {
    name: 'timer',
    code: 'e425',
  },
  {
    name: 'timer_10',
    code: 'e423',
  },
  {
    name: 'timer_10_select',
    code: 'f07a',
  },
  {
    name: 'timer_3',
    code: 'e424',
  },
  {
    name: 'timer_3_select',
    code: 'f07b',
  },
  {
    name: 'timer_off',
    code: 'e426',
  },
  {
    name: 'tips_and_updates',
    code: 'e79a',
  },
  {
    name: 'title',
    code: 'e264',
  },
  {
    name: 'toc',
    code: 'e8de',
  },
  {
    name: 'today',
    code: 'e8df',
  },
  {
    name: 'toggle_off',
    code: 'e9f5',
  },
  {
    name: 'toggle_on',
    code: 'e9f6',
  },
  {
    name: 'toll',
    code: 'e8e0',
  },
  {
    name: 'tonality',
    code: 'e427',
  },
  {
    name: 'topic',
    code: 'f1c8',
  },
  {
    name: 'touch_app',
    code: 'e913',
  },
  {
    name: 'tour',
    code: 'ef75',
  },
  {
    name: 'toys',
    code: 'e332',
  },
  {
    name: 'track_changes',
    code: 'e8e1',
  },
  {
    name: 'traffic',
    code: 'e565',
  },
  {
    name: 'train',
    code: 'e570',
  },
  {
    name: 'tram',
    code: 'e571',
  },
  {
    name: 'transfer_within_a_station',
    code: 'e572',
  },
  {
    name: 'transform',
    code: 'e428',
  },
  {
    name: 'transgender',
    code: 'e58d',
  },
  {
    name: 'transit_enterexit',
    code: 'e579',
  },
  {
    name: 'translate',
    code: 'e8e2',
  },
  {
    name: 'travel_explore',
    code: 'e2db',
  },
  {
    name: 'trending_down',
    code: 'e8e3',
  },
  {
    name: 'trending_flat',
    code: 'e8e4',
  },
  {
    name: 'trending_neutral',
    code: 'e8e4',
  },
  {
    name: 'trending_up',
    code: 'e8e5',
  },
  {
    name: 'trip_origin',
    code: 'e57b',
  },
  {
    name: 'try',
    code: 'f07c',
  },
  {
    name: 'tty',
    code: 'f1aa',
  },
  {
    name: 'tune',
    code: 'e429',
  },
  {
    name: 'tungsten',
    code: 'f07d',
  },
  {
    name: 'turned_in',
    code: 'e8e6',
  },
  {
    name: 'turned_in_not',
    code: 'e8e7',
  },
  {
    name: 'tv',
    code: 'e333',
  },
  {
    name: 'tv_off',
    code: 'e647',
  },
  {
    name: 'two_wheeler',
    code: 'e9f9',
  },
  {
    name: 'umbrella',
    code: 'f1ad',
  },
  {
    name: 'unarchive',
    code: 'e169',
  },
  {
    name: 'undo',
    code: 'e166',
  },
  {
    name: 'unfold_less',
    code: 'e5d6',
  },
  {
    name: 'unfold_more',
    code: 'e5d7',
  },
  {
    name: 'unpublished',
    code: 'f236',
  },
  {
    name: 'unsubscribe',
    code: 'e0eb',
  },
  {
    name: 'upcoming',
    code: 'f07e',
  },
  {
    name: 'update',
    code: 'e923',
  },
  {
    name: 'update_disabled',
    code: 'e075',
  },
  {
    name: 'upgrade',
    code: 'f0fb',
  },
  {
    name: 'upload',
    code: 'f09b',
  },
  {
    name: 'upload_file',
    code: 'e9fc',
  },
  {
    name: 'usb',
    code: 'e1e0',
  },
  {
    name: 'usb_off',
    code: 'e4fa',
  },
  {
    name: 'verified',
    code: 'ef76',
  },
  {
    name: 'verified_user',
    code: 'e8e8',
  },
  {
    name: 'vertical_align_bottom',
    code: 'e258',
  },
  {
    name: 'vertical_align_center',
    code: 'e259',
  },
  {
    name: 'vertical_align_top',
    code: 'e25a',
  },
  {
    name: 'vertical_distribute',
    code: 'e076',
  },
  {
    name: 'vertical_split',
    code: 'e949',
  },
  {
    name: 'vibration',
    code: 'e62d',
  },
  {
    name: 'video_call',
    code: 'e070',
  },
  {
    name: 'video_camera_back',
    code: 'f07f',
  },
  {
    name: 'video_camera_front',
    code: 'f080',
  },
  {
    name: 'video_collection',
    code: 'e04a',
  },
  {
    name: 'video_label',
    code: 'e071',
  },
  {
    name: 'video_library',
    code: 'e04a',
  },
  {
    name: 'video_settings',
    code: 'ea75',
  },
  {
    name: 'video_stable',
    code: 'f081',
  },
  {
    name: 'videocam',
    code: 'e04b',
  },
  {
    name: 'videocam_off',
    code: 'e04c',
  },
  {
    name: 'videogame_asset',
    code: 'e338',
  },
  {
    name: 'videogame_asset_off',
    code: 'e500',
  },
  {
    name: 'view_agenda',
    code: 'e8e9',
  },
  {
    name: 'view_array',
    code: 'e8ea',
  },
  {
    name: 'view_carousel',
    code: 'e8eb',
  },
  {
    name: 'view_column',
    code: 'e8ec',
  },
  {
    name: 'view_comfortable',
    code: 'e42a',
  },
  {
    name: 'view_comfy',
    code: 'e42a',
  },
  {
    name: 'view_compact',
    code: 'e42b',
  },
  {
    name: 'view_day',
    code: 'e8ed',
  },
  {
    name: 'view_headline',
    code: 'e8ee',
  },
  {
    name: 'view_in_ar',
    code: 'e9fe',
  },
  {
    name: 'view_list',
    code: 'e8ef',
  },
  {
    name: 'view_module',
    code: 'e8f0',
  },
  {
    name: 'view_quilt',
    code: 'e8f1',
  },
  {
    name: 'view_sidebar',
    code: 'f114',
  },
  {
    name: 'view_stream',
    code: 'e8f2',
  },
  {
    name: 'view_week',
    code: 'e8f3',
  },
  {
    name: 'vignette',
    code: 'e435',
  },
  {
    name: 'villa',
    code: 'e586',
  },
  {
    name: 'visibility',
    code: 'e8f4',
  },
  {
    name: 'visibility_off',
    code: 'e8f5',
  },
  {
    name: 'voice_chat',
    code: 'e62e',
  },
  {
    name: 'voice_over_off',
    code: 'e94a',
  },
  {
    name: 'voicemail',
    code: 'e0d9',
  },
  {
    name: 'volume_down',
    code: 'e04d',
  },
  {
    name: 'volume_down_alt',
    code: 'e79c',
  },
  {
    name: 'volume_mute',
    code: 'e04e',
  },
  {
    name: 'volume_off',
    code: 'e04f',
  },
  {
    name: 'volume_up',
    code: 'e050',
  },
  {
    name: 'volunteer_activism',
    code: 'ea70',
  },
  {
    name: 'vpn_key',
    code: 'e0da',
  },
  {
    name: 'vpn_lock',
    code: 'e62f',
  },
  {
    name: 'vrpano',
    code: 'f082',
  },
  {
    name: 'wallet_giftcard',
    code: 'e8f6',
  },
  {
    name: 'wallet_membership',
    code: 'e8f7',
  },
  {
    name: 'wallet_travel',
    code: 'e8f8',
  },
  {
    name: 'wallpaper',
    code: 'e1bc',
  },
  {
    name: 'warning',
    code: 'e002',
  },
  {
    name: 'warning_amber',
    code: 'f083',
  },
  {
    name: 'wash',
    code: 'f1b1',
  },
  {
    name: 'watch',
    code: 'e334',
  },
  {
    name: 'watch_later',
    code: 'e924',
  },
  {
    name: 'water',
    code: 'f084',
  },
  {
    name: 'water_damage',
    code: 'f203',
  },
  {
    name: 'water_drop',
    code: 'e798',
  },
  {
    name: 'waterfall_chart',
    code: 'ea00',
  },
  {
    name: 'waves',
    code: 'e176',
  },
  {
    name: 'waving_hand',
    code: 'e766',
  },
  {
    name: 'wb_auto',
    code: 'e42c',
  },
  {
    name: 'wb_cloudy',
    code: 'e42d',
  },
  {
    name: 'wb_incandescent',
    code: 'e42e',
  },
  {
    name: 'wb_iridescent',
    code: 'e436',
  },
  {
    name: 'wb_shade',
    code: 'ea01',
  },
  {
    name: 'wb_sunny',
    code: 'e430',
  },
  {
    name: 'wb_twighlight',
    code: 'ea02',
  },
  {
    name: 'wb_twilight',
    code: 'e1c6',
  },
  {
    name: 'wc',
    code: 'e63d',
  },
  {
    name: 'web',
    code: 'e051',
  },
  {
    name: 'web_asset',
    code: 'e069',
  },
  {
    name: 'web_asset_off',
    code: 'e4f7',
  },
  {
    name: 'web_stories',
    code: 'e595',
  },
  {
    name: 'weekend',
    code: 'e16b',
  },
  {
    name: 'west',
    code: 'f1e6',
  },
  {
    name: 'whatshot',
    code: 'e80e',
  },
  {
    name: 'wheelchair_pickup',
    code: 'f1ab',
  },
  {
    name: 'where_to_vote',
    code: 'e177',
  },
  {
    name: 'widgets',
    code: 'e1bd',
  },
  {
    name: 'wifi',
    code: 'e63e',
  },
  {
    name: 'wifi_calling',
    code: 'ef77',
  },
  {
    name: 'wifi_calling_3',
    code: 'f085',
  },
  {
    name: 'wifi_lock',
    code: 'e1e1',
  },
  {
    name: 'wifi_off',
    code: 'e648',
  },
  {
    name: 'wifi_protected_setup',
    code: 'f0fc',
  },
  {
    name: 'wifi_tethering',
    code: 'e1e2',
  },
  {
    name: 'wifi_tethering_error_rounded',
    code: 'f086',
  },
  {
    name: 'wifi_tethering_off',
    code: 'f087',
  },
  {
    name: 'window',
    code: 'f088',
  },
  {
    name: 'wine_bar',
    code: 'f1e8',
  },
  {
    name: 'work',
    code: 'e8f9',
  },
  {
    name: 'work_off',
    code: 'e942',
  },
  {
    name: 'work_outline',
    code: 'e943',
  },
  {
    name: 'workspaces',
    code: 'e1a0',
  },
  {
    name: 'workspaces_filled',
    code: 'ea0d',
  },
  {
    name: 'workspaces_outline',
    code: 'ea0f',
  },
  {
    name: 'wrap_text',
    code: 'e25b',
  },
  {
    name: 'wrong_location',
    code: 'ef78',
  },
  {
    name: 'wysiwyg',
    code: 'f1c3',
  },
  {
    name: 'yard',
    code: 'f089',
  },
  {
    name: 'youtube_searched_for',
    code: 'e8fa',
  },
  {
    name: 'zoom_in',
    code: 'e8ff',
  },
  {
    name: 'zoom_out',
    code: 'e900',
  },
  {
    name: 'zoom_out_map',
    code: 'e56b',
  },
]

export default ICONS
