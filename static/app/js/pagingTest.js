/**
 * Created by pafu on 2017/7/7.
 */
      <div class="dataTables_paginate paging_bootstrap pagination">
                                                             <span >
                                                                 <a class="prev" ng-click="Previous()" role="button">
                                                                     <-
                                                                     <span role="button">Prev</span>
                                                                 </a>
                                                             </span>
                                                             <span ng-repeat="page in pageList" ng-class="{active: isActivePage(page)}" role="button">
                                                                 <a ng-click="selectPage(page)" >{{ page }}</a>
                                                             </span>
                                                             <span>
                                                                 <a class="next" ng-click="Next()" role="button">
                                                                     <span role="button">Next</span>
                                                                     ->
                                                                 </a>
                                                             </span>
                                                        </div>