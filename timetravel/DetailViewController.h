//
//  DetailViewController.h
//  timetravel
//
//  Created by AK on 04/06/2013.
//  Copyright (c) 2013 NBS. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;

@property (strong, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end
