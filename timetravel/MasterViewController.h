//
//  MasterViewController.h
//  timetravel
//
//  Created by AK on 04/06/2013.
//  Copyright (c) 2013 NBS. All rights reserved.
//

#import <UIKit/UIKit.h>

@class DetailViewController;

@interface MasterViewController : UITableViewController

@property (strong, nonatomic) DetailViewController *detailViewController;

@end
